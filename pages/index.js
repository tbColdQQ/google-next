import { useState } from 'react'

function useUpdateInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: event => setValue(event.target.value)
  }
}

export default function Home() {

  const [list, setList] = useState([])
  const [currentUrl, setCurrentUrl] = useState('')
  const [index, setIndex] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [isShow, setIsShow] = useState(false)

  const titleInput = useUpdateInput('')
  const urlInput = useUpdateInput('')

  const showDialog = () => {
    setIsShow(true)
  }

  const hideDialog = () => {
    setIsShow(false)
  }

  const jumpTo = url => {
    window.open(url)
  }

  const createTag = (title, url) => {
    let tempIndex = index + 1
    let tempList = [...list]
    tempList.push({title, url, index: tempIndex, key: tempIndex})
    console.log('tempList--->', tempList)
    setList(tempList)
    setIndex(tempIndex)
  }

  const saveTag = (title, url) => {
    let tempList = [...list]
    let item = tempList.filter(obj => obj.index === currentIndex)[0]
    item.title = title
    item.url = url
    setList(tempList)
  }

  const editTag = type => {
    if (type === 'add') {
      setCurrentIndex(-1)
      createTag(titleInput.value, urlInput.value)
    } else {
      setCurrentIndex(type)
      saveTag(titleInput.value, urlInput.value)
    }
  }

  const handleRemove = () => {
    let tempList = [...list].filter(item.url === currentUrl)
    StyleSheetList(tempList)
  }

  return (
    <div className="container">
      <img src="./images/logo.svg" className="logo"/>
      <div className="search-input">
        <input type="search" className="input" placeholder="在 Google 上搜索，或者输入一个网址"/>
        <div className="search-icon" style={{backgroundImage: 'url(./images/search.svg)'}}></div>
        <div className="mic-icon" style={{backgroundImage: 'url(./images/mic.svg)'}}></div>
      </div>
      <div className="most-visited">
        {
          list.map(item => (
            <a className="visited-item" key={item.key} onClick={() => jumpTo(item.url)}>
              <img src="./images/more.svg" onClick={() => editTag(item.index)} className="more-icon"/>
              <div className="item-icon">
                <img src="https://github.com/favicon.ico"/>
              </div>
              <div className="item-title">{item.title}</div>
            </a>
          ))
        }
        <a className="visited-item" onClick={createTag}>
          {/* <img src="./images/more.svg" className="more-icon"/> */}
          <div className="item-icon">
            <img src="./images/add.svg"/>
          </div>
          <div className="item-title">添加快捷方式</div>
        </a>
      </div>
      <div className="mask" style={{display: isShow ? 'block' : 'none'}}>
        <div className="mask-body">
          <div className="dialog-title" onClick={showDialog}>添加快捷方式</div>
          <div className="form">
            <div className="form-item">
              <label>名称</label>
              <input name="title" {...titleInput}/>
            </div>
            <div className="form-item">
              <label>网址</label>
              <input name="url" {...urlInput}/>
            </div>
          </div>
          <div className="btn-group">
            <div className="btn default-btn remove-btn" onClick={handleRemove}>移除</div>
            <div style={{display: 'flex'}}>
              <div className="btn default-btn cancel-btn" onClick={hideDialog}>取消</div>
              <div className="btn primary-btn complate-btn" onClick={editTag}>完成</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
