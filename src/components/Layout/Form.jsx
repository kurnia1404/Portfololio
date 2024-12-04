import './style.css';

export const InputBox = (propsInput, ...props) => {
  return (
    <div className='input-box' {...props}>
      <input
        name='name'
        type='text'
        placeholder='Name'
        className='input-control'
        required
        {...propsInput}
      />
    </div>
  );
};

export const TextAreaBox = (propsInput, ...props) => {
  return (
    <div className='input-box' {...props}>
      <textarea
        name='message'
        placeholder='Message'
        className='input-control'
        required
        {...propsInput}
      />
    </div>
  );
};
