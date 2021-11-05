// on form submission, this will grab review_text and resort_id from the form and send them with a POST request to /api/reviews || requires id which is obtained from the session
async function reviewFormHandler(event) {
  event.preventDefault();

  const review_text = document.querySelector('#review-body').value;
  const resort_id = window.location.pathname.split(`/`)[2];
 
  

  if (review_text) {
    const response = await fetch(`/api/reviews`, {
      method: "post",
      body: JSON.stringify({
        review_text,
        resort_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      console.log("====================");
      console.log(review_text);
      console.log("====================");
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}


document
  .querySelector(".review-form")
  .addEventListener("submit", reviewFormHandler);
