let messageInput = document.querySelector('.message-input');
const sendBtn = document.querySelector('.send-message');
const nameSpan = document.querySelector('.name-span');

const pass = localStorage.getItem('password');

nameSpan.innerHTML = `${pass}!`;

const names = [
  'Sam',
  'Luna',
  'Nate',
  'Alex'
]

sendBtn.addEventListener('click', () => {
  const messageInputVal = messageInput.value;
  const time = dayjs().format('h:mm A');
  const randomName = names[Math.floor(Math.random() * names.length)];

  if (messageInputVal === '') {
    return;
  }

  const chat = `
    <div class="main">
      <div class="pic"><i class="fa-solid fa-circle-user"></i>
      </div>
      <div class="flex">
        <div class="name">
          <p>${randomName} · ${time}</p>
        </div>
        <div class="chat">
          ${messageInputVal}
        </div>
      </div>
    </div>
  `

  document.querySelector('.container').innerHTML += chat;

  messageInput.value = '';
})


messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const time = dayjs().format('h:mm A');
    const messageInputVal = messageInput.value;

    if (messageInputVal === '') {
      return;
    }

    
    const chat = `
      <div class="main">
        <div class="pic"><i class="fa-solid fa-circle-user"></i>
        </div>
        <div class="flex">
          <div class="name">
            <p>Sam · ${time}</p>
          </div>
          <div class="chat">
            ${messageInputVal}
          </div>
        </div>
      </div>
    `

    document.querySelector('.container').innerHTML += chat;

    messageInput.value = ''
  };
})