
export default function Home() {
  return (
    <div className="container">
      <img src="./images/logo.svg" className="logo"/>
      <div className="search-input">
        <input type="search" className="input" placeholder="在 Google 上搜索，或者输入一个网址"/>
        <div className="search-icon" style={{backgroundImage: 'url(./images/search.svg)'}}></div>
        <div className="mic-icon" style={{backgroundImage: 'url(./images/mic.svg)'}}></div>
      </div>
      <div className="most-visited">
        <a className="visited-item">
          <img src="./images/more.svg" className="more-icon"/>
          <div className="item-icon">
            <img src="https://github.com/favicon.ico"/>
          </div>
          <div className="item-title">Github</div>
        </a>
        <a className="visited-item">
          <img src="./images/more.svg" className="more-icon"/>
          <div className="item-icon">
            <img src="https://github.com/favicon.ico"/>
          </div>
          <div className="item-title">Github</div>
        </a>
        <a className="visited-item">
          <img src="./images/more.svg" className="more-icon"/>
          <div className="item-icon">
            <img src="https://github.com/favicon.ico"/>
          </div>
          <div className="item-title">Github</div>
        </a>
        <a className="visited-item">
          <img src="./images/more.svg" className="more-icon"/>
          <div className="item-icon">
            <img src="https://github.com/favicon.ico"/>
          </div>
          <div className="item-title">Github</div>
        </a>
        <a className="visited-item">
          <img src="./images/more.svg" className="more-icon"/>
          <div className="item-icon">
            <img src="https://github.com/favicon.ico"/>
          </div>
          <div className="item-title">Github</div>
        </a>
        <a className="visited-item">
          <img src="./images/more.svg" className="more-icon"/>
          <div className="item-icon">
            <img src="https://github.com/favicon.ico"/>
          </div>
          <div className="item-title">Github</div>
        </a>
        <a className="visited-item">
          <img src="./images/more.svg" className="more-icon"/>
          <div className="item-icon">
            <img src="https://github.com/favicon.ico"/>
          </div>
          <div className="item-title">Github</div>
        </a>
        <a className="visited-item">
          <img src="./images/more.svg" className="more-icon"/>
          <div className="item-icon">
            <img src="https://github.com/favicon.ico"/>
          </div>
          <div className="item-title">Github</div>
        </a>
        <a className="visited-item">
          <img src="./images/more.svg" className="more-icon"/>
          <div className="item-icon">
            <img src="https://github.com/favicon.ico"/>
          </div>
          <div className="item-title">Github</div>
        </a>
        <a className="visited-item">
          {/* <img src="./images/more.svg" className="more-icon"/> */}
          <div className="item-icon">
            <img src="./images/add.svg"/>
          </div>
          <div className="item-title">添加快捷方式</div>
        </a>
      </div>
      <div className="mask">
        <div className="mask-body">
          <div className="dialog-title">添加快捷方式</div>
          <div className="form">
            <div className="form-item">
              <label>名称</label>
              <input />
            </div>
            <div className="form-item">
              <label>网址</label>
              <input />
            </div>
          </div>
          <div className="btn-group">
            <div className="btn default-btn remove-btn">移除</div>
            <div className="btn default-btn cancel-btn">取消</div>
            <div className="btn primary-btn complate-btn">完成</div>
          </div>
        </div>
      </div>
    </div>
  )
}
