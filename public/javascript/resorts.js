async function commentFormHandler(event) {
    event.preventDefault();

    // const review_text = document.querySelector('input[name="comment-body"]').value.trim();

    // const post_id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length - 1
    // ];

    const response = await fetch('/api/resorts', {
        method: 'POST',
        body: JSON.stringify({
            id,
            resort_title,
            resort_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');

    } else {
        alert(response.statusText);
        // document.querySelector('#comment-form').style.display = "block";
    }
}


document.querySelector('.resort-list').addEventListener('submit', commentFormHandler);