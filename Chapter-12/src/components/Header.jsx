import QuizLogoImg from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header>
      <img src={QuizLogoImg} alt='Logo' />
      <h1>Quiz.</h1>
    </header>
  );
}
