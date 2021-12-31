import './Button.css';

function Button({ children, onClick , styleType = ''}){
  const classNames = `Button ${styleType}`;
  return <button className={classNames} onClick={ onClick }>{ children }</button>;
}

export default Button;