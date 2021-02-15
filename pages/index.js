import { useState } from 'react'

function useUpdateInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: event => setValue(event.target.value),
    setValue
  }
}

function useList (initialValue) {
  const [value, setValue] = useState(initialValue)
  let lsList = ''
  // let lsList = window.localStorage.getItem('list')
  return [
    lsList ? JSON.parse(lsList) : value,
    list => {
      setValue(list)
      // window.localStorage.setItem('list', JSON.stringify(list))
    }
  ]
}

function getFavicon (url) {
  let tempUrl = url
  if (tempUrl.indexOf('http') < 0) tempUrl = 'http://' + tempUrl
  let matcht = /^(https?:\/\/)([0-9a-z.]+)(:[0-9]+)?([/0-9a-z.]+)?(\?[0-9a-z&=]+)?(#[0-9-a-z]+)?/i
  let result = matcht.exec(tempUrl)
  return result[1] + result[2] + '/favicon.ico'
}

export default function Home() {

  const [list, setList] = useList([])
  const [index, setIndex] = useState(0)
  const [isShow, setIsShow] = useState(false)
  const [type, setType] = useState('add')

  const titleInput = useUpdateInput('')
  const urlInput = useUpdateInput('')

  const showDialog = (t, e) => {
    setIsShow(true)
    setType(t)
    if (t !== 'add') {
      let item = list.filter(obj => obj.index === t)[0]
      if (item) {
        titleInput.setValue(item.title)
        urlInput.setValue(item.url)
      }
    }
    e.stopPropagation()
  }

  const hideDialog = () => {
    setIsShow(false)
  }

  const jumpTo = url => {
    if (url.indexOf('http') < 0) {
      window.open('//' + url)
    } else {
      window.open(url)
    }
  }

  const createTag = (title, url) => {
    let tempIndex = index + 1
    let tempList = [...list]
    tempList.push({title, url, index: tempIndex, key: tempIndex, icon: getFavicon(url)})
    if (tempList.length > 9) tempList.splice(9)
    setList(tempList)
    setIndex(tempIndex)
    setIsShow(false)
  }

  const saveTag = (title, url) => {
    let tempList = [...list]
    let item = tempList.filter(obj => obj.index === type)[0]
    item.title = title
    item.url = url
    item.icon = getFavicon(url)
    setList(tempList)
    setIsShow(false)
  }

  const editTag = () => {
    if (type === 'add') {
      createTag(titleInput.value, urlInput.value)
    } else {
      saveTag(titleInput.value, urlInput.value)
    }
    titleInput.setValue('')
    urlInput.setValue('')
  }

  const handleRemove = () => {
    let tempList = [...list].filter(item => item.index !== type)
    setList(tempList)
    setIsShow(false)
    titleInput.setValue('')
    urlInput.setValue('')
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
              <img src="./images/more.svg" onClick={event => showDialog(item.index, event)} className="more-icon"/>
              <div className="item-icon">
                <img src={item.icon}/>
              </div>
              <div className="item-title">{item.title}</div>
            </a>
          ))
        }
        <a className="visited-item" onClick={event => showDialog('add', event)}>
          {/* <img src="./images/more.svg" className="more-icon"/> */}
          <div className="item-icon">
            <img src="./images/add.svg"/>
          </div>
          <div className="item-title">添加快捷方式</div>
        </a>
      </div>
      <div className="mask" style={{display: isShow ? 'flex' : 'none'}}>
        <div className="mask-body">
          <div className="dialog-title">添加快捷方式</div>
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
