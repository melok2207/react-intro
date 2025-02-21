import "./Main.css";

function Main() {
  return (
    <main className="main">
      <h1>Ласкаво просимо до React!</h1>
      <p>Це основний контент сторінки.</p>
      <button onClick={() => alert("Кнопка натиснута!")}>Натисни мене</button>
    </main>
  );
}

export default Main;
