import React, { Component } from 'react';
import './ContactForm.min.css';


class ContactForm extends Component {

  state = {
    isSubmitted: false,
    email: '',
    hasEmailError: false,
    content: '',
    hasContentError: false
  }

  // submitクリックで全体切り替え
  handleSubmit(){
    this.setState({isSubmitted: true})
  }

  // emailのinputを判定
  handleEmailChange(event){
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      email: inputValue,
      hasEmailError: isEmpty
    });
  }

  // お問い合わせ内容のinputを判定
  handleContentChange(event){
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      content: inputValue,
      hasContentError: isEmpty
    });
  }

  render(){

    // emailのエラーメッセージ表示(val=空の時)
    let emailErrorText;
    if(this.state.hasEmailError){
      emailErrorText = (
        <p className='contact-message-error'>
          Emailを入力して下さい
        </p>
      );
    }

    // お問い合わせ内容のエラメッセージ表示(val=空の時)
    let contentErrorText;
    if(this.state.hasContentError){
      contentErrorText = (
        <p className='contact-message-error'>
          お問い合わせ内容を入力して下さい
        </p>
      );
    }

    // ここでsubmitが押されるまでと押されたとの表示を切り替える
    // submitが押されたらreturnに飛び、formは消える
    let contactForm;
    if(this.state.isSubmitted){
      contactForm = (
        <div className='contact-submit-message'>
          送信完了
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={()=>{this.handleSubmit()}}>
          <p>メールアドレス（必須）</p>
          <input
            value={this.state.email}
            onChange={(event)=>{this.handleEmailChange(event)}}
          />
          {emailErrorText}
          <p>お問い合わせ内容（必須）</p>
          <textarea
            value={this.state.contet}
            onChange={(event)=>{this.handleContentChange(event)}}
          />
          {contentErrorText}
          <input
            className="submit"
            type="submit"
            value="送信"
          />
        </form>
      );
    }

    return(
      <div className="user_form">
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;
