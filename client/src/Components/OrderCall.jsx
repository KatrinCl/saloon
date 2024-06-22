import React from 'react';
import './../Styles/OrderCall.css';

const OrderCall = ({ onClose }) => {

        const [result, setResult] = React.useState("");

        const onSubmit = async (event) => {
          event.preventDefault();
          setResult("Отправляется....");
          const formData = new FormData(event.target);
      
          formData.append("access_key", "0cbfb9cc-a4cd-4586-a7fb-d34271cd6434");
      
          const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
          });
      
          const data = await response.json();
      
          if (data.success) {
            setResult("Успешно отправлено ✓");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
      }
      
  return (
    <div className='order-call'>
      <form className="order" onSubmit={onSubmit}>
        <button className="close-button1" onClick={onClose}>X</button>
        <h2>Заказать звонок</h2>
        <input type="text" placeholder="Ваше имя" required/>
        <input type="tel" name='phone' placeholder="Ваш телефон" required/>
        <input type="email" placeholder="Email" required/>
        <textarea className='order-text' name="message" rows="6" placeholder='Здесь Вы можете задать нам свои вопросы' required></textarea>

      <span>{result}</span>
        <button className='btn-order' type='submit'>Отправить</button>
      </form>

    </div>
  )
}

export default OrderCall;
