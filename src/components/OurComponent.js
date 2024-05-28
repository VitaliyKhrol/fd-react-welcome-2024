
function Section(props) {

  const userObj = {
    "id": 3,
    "name": "Jane",
    "description": "yjtykyumjhjhjkgjhhjkhkj",
    "profilePicture": "https://media.istockphoto.com/photos/elegant-beauty-picture-id516208984?k=20&m=516208984&s=612x612&w=0&h=KooFBmqHtO2lz5CFV5Oe87u_12wgKCxHvTHxlYuErCU="
  };

  function focusSubmit() {
    // e.preventDefault();
    console.log('Отправлена форма.');
  }

  return (
    <section>
      <img src={userObj.profilePicture} alt=""></img>
      <h2 >{userObj.name}</h2>
      <p>{userObj.description}</p>
      <button onMouseEnter={focusSubmit}>Click</button>

    </section>
  )
}

export default Section;