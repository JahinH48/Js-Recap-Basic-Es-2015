document.getElementById('add-border').addEventListener('click', function () {
    const clickBorder = document.getElementById('friend-container');
    clickBorder.style.border = ('2px solid blue')
})

function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    // console.log('jisan')
    for (let friend of friends) {
        friend.style.backgroundColor = ('gray');
        friend.style.color = 'white';
    }

}

document.getElementById('add-friend').addEventListener('click', function () {
    const container = document.getElementById('friend-container');
    const friendaddElement = document.createElement('div');
    friendaddElement.classList.add('friend');

    friendaddElement.innerHTML = `<h3 class="friend-name">New-Friend</h3>
   <p>Lorem, ipsum.</p>`;

    container.appendChild(friendaddElement);
})