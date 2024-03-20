import React, {FC} from "react";
import Button from "./Button/Button";
import { useState, useRef } from "react";

const StateVsRef: FC = () => {
    const [show, setShow] = useState<boolean>(false)
    const input = useRef<HTMLInputElement>(null)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setShow(true)
        }
    }
    return (
        <div>
            <h3 style={{marginBottom: '2px'}}>Input value: {show && input.current?.value}</h3>
            <input
                ref={input}
                type="text"
                onKeyDown={handleKeyDown}
                className='control'
            />
        </div>
    )
}

const FeedBackSection = () => {
    const [form, setForm] = useState({
        name: '',
        reason: 'help',
        hasError: false
    })

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({
          ...prev,
          name: e.target.value,
          hasError: e.target.value.trim().length === 0
      }))
  };

  return (
    <section>
      <h3>Обратная связь</h3>

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          style={{
              border: form.hasError ? '1px solid red' : undefined
          }}
          onChange={handleNameChange}
        />

        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={(e) => setForm((prev) => ({
              ...prev,
              reason: e.target.value
          }))}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>
        <Button style={{marginBottom: '1rem'}} disabled={form.hasError}>Отправить</Button>
      </form>

      {/*<pre>*/}
      {/*  {JSON.stringify(form, null ,2)}*/}
      {/*</pre>*/}
        <StateVsRef/>

    </section>
  );
};

export default FeedBackSection;
