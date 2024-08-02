import { Component } from 'react';
import './styles.css'
import { loadPosts } from '../../utils/load-posts'
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button'
import { Search } from '../../components/Search';

class Home extends Component {
  state = {
    filteredPosts: [],
    showBtn: true
  }
  posts = []
  postsPerPage = 3

  async componentDidMount(){
    const posts = await loadPosts()
    this.posts = posts
    this.setState({filteredPosts: posts.slice(0, this.postsPerPage)})
  }

  loadMorePosts = () => {
    this.postsPerPage += 3
    this.setState({filteredPosts: this.posts.slice(0, this.postsPerPage)})
  }

  handleChange = (e) => {
    const value = e.target.value.toUpperCase()
    if(value){
      this.setState({showBtn: false})
    } else {
      this.setState({showBtn: true})
    }

    const posts = this.posts.filter(post => {
      return post.title.toUpperCase().includes(value) || post.body.toUpperCase().includes(value)
    })

    this.setState({filteredPosts: posts})
  }

  render(){
    const { filteredPosts, showBtn } = this.state
    const disabled = filteredPosts.length >= this.posts.length

    return (
      <section className='container'>
        <Search handleChange={this.handleChange} />
        <Posts posts={filteredPosts}/>
        { showBtn &&
          <Button disabled={disabled} action={this.loadMorePosts} />
        }
        { filteredPosts.length === 0 && <p style={{textAlign: 'center'}}>Não existem posts =(</p> }
      </section>
    )
  }
}

export default Home;
