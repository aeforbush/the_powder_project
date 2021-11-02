async function reviewFormHandler(event) {
    event.preventDefault();

    const review_text = document.querySelector('input[name="review-body"]').value.trim();

    const resort_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    const response = await fetch('/api/reviews', {
        method: 'POST',
        body: JSON.stringify({
            review_text,
            resort_id,
        
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.reload();

    } else {
        alert(response.statusText);
        //  document.querySelector('#resort-form');
    }
}


document.querySelector('.review-form').addEventListener('submit', reviewFormHandler);