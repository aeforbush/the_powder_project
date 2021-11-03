// async function getReviewFormHandler(event) {
//     event.preventDefault();


//     const response = await fetch('/api/reviews', {
//         method: 'get',
//         body: JSON.stringify({
//             review_text,
//             user_id,
//             resort_id,
        
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.reload();

//     } else {
//         alert(response.statusText);
//         //  document.querySelector('#resort-form');
//     }
// }


// document.querySelector('.review-form').addEventListener('submit', getReviewFormHandler);