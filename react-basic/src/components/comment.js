/*
 * @Author: zjt
 * @Date: 2022-04-07 16:40:18
 * @LastEditors: zjt
 * @LastEditTime: 2022-04-07 18:02:07
 * @Description: file content
 * @FilePath: \react-basic\src\components\comment.js
 */
import React from 'react'
import './comments.css'
import avatar from './static/avatar.png'  // 引用=临时变量
import like from './static/like.png'
import dislike from './static/dislike.png'

export function Comment() { // 不用 default

    return (
        <>
            <div className='comment-title'>评论<span className='comment-number'>5</span></div>

            <div className='tab selected-tab'>
                最热
            </div>
            <div className='tab'>
                最新
            </div>
            <hr />
            <div>
                <img src={avatar} alt="xxx" className='avatar textarea-align' />
                <textarea name="comment" id="comment" cols="60" rows="3" placeholder='发条友善的评论' className='textarea-align'></textarea>
                <button className='comment-button'>发表评论</button>
            </div>
            {/* <div>
                <button>表情</button>
            </div> */}
            <div style={{ clear: 'both' }}></div>
            <div>
                <img src={avatar} alt="xxx" className='avatar textarea-align' />
                <hr />
                <div>
                    <div>周杰伦</div>
                    <div>哎哟，不错噢</div>
                    <div>
                        <span>2022年4月7日</span>
                        <span><img src={like} alt="asdas" className='like-icon' /></span>
                        <span><img src={dislike} alt="asdas" className='like-icon' /></span>
                        <span className='align'>删除</span>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

