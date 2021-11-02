// on form submission, this will grab post-title and post-url from the form and send them with a POST request to /api/posts || requires id which is obtained from the session
// async function reviewFormHandler(event) {
//     event.preventDefault();

//     const title = document.querySelector('input[name="review-title"]')
//     .value;
//     const review_text = document.querySelector('input[name="review-text"]')
//     .value;  

//     const response = await fetch(`/api/reviews`, {
//         method: 'POST',
//         body: JSON.stringify({
//             title,
//             review_text    
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if(response.ok) {
//         document.location.replace('/dashboard');
//     } else {
//         alert(response.statusText);
//     }
// }

// document.querySelector('.new-review-form').addEventListener('submit', reviewFormHandler);

async function reviewFormHandler(event) {
    event.preventDefault();
  
    const review_text = document.querySelector('textarea[name="review-text"]').value.trim();
  
    const resort_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    console.log(review_text, resort_id);
  }
  
  document.querySelector('.review-form').addEventListener('submit', reviewFormHandler);