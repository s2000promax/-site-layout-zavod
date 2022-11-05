function createHtmlElement(className, tagName = 'div', textContent, lock = false, src) {
  const $element = document.createElement(tagName);
  if (className) {
    $element.classList.add(className);
  }
  if (textContent) {
    $element.innerText = textContent;
  }
  if (tagName === 'img') {
    $element.src = getRemotePath(src);
    $element.onerror = function () {
      this.style.display = 'none';
    };
    if (!lock) {
      $element.style.visibility = 'hidden';
    }
  }

  return $element;
}

function createMainTemplate(className, lock) {
  const $itemTemplate = createHtmlElement(`${className}training-item`, 'div');
  const $rectangle = createHtmlElement(`${className}rectangle`, 'div');
  const $lock = createHtmlElement('lock', 'img', '', lock, '/image/lock.png');

  $rectangle.append($lock);
  $itemTemplate.append($rectangle);

  return $itemTemplate;
}


function creatButton(className, src) {
  const $button = createHtmlElement(className, 'div');
  const $image = createHtmlElement(`${className}-image`, 'img', '', true, src);
  $button.append($image);

  return $button;
}

function createMenu() {
  const $menu = createHtmlElement('menu-container', 'div');
  const $profile = creatButton('menu-profile', '/image/profile.png');
  const $notification = creatButton('menu-notification', '/image/notification.png');
  const $site = creatButton('menu-site', '/image/site.png');
  const $education = creatButton('menu-education', '/image/education.png');
  const $users = creatButton('menu-users', '/image/users.png');
  const $tasks = creatButton('menu-tasks', '/image/tasks.png');
  const $messages = creatButton('menu-messages', '/image/messages.png');
  const $sales = creatButton('menu-sales', '/image/sales.png');
  const $chat = creatButton('menu-chat', '/image/chat.png');
  $menu.append($profile, $notification, $site, $education, $users, $tasks, $messages, $sales, $chat);

  return $menu;
}


function generateHeader(text) {
  const $header = createHtmlElement('header-text', 'div', text);
  const $line = createHtmlElement('header-line', 'div');
  $header.append($line);

  return $header;
}

function createTrainingItem(header, trainingInfo, authorInfo, lessonsInfo, lock = false, href) {
  const className = '';

  const $trainingItem = createMainTemplate(className, lock);

  const $ContentContainer = createHtmlElement('content-container', 'a');
  $ContentContainer.href = href;
  const $line1 = createHtmlElement(lock ? 'line1-lock' : 'line1', 'div', header);
  const $line2 = createHtmlElement(lock ? 'line2-lock' : 'line2', 'div', trainingInfo);
  $ContentContainer.append($line1);
  $ContentContainer.append($line2);

  $trainingItem.append($ContentContainer);

  const $InfoContainer = createHtmlElement('info-container', 'div');
  const $author = createHtmlElement(lock ? 'author-lock' : 'author', 'div', authorInfo);
  $InfoContainer.append($author);

  const $lessonsWrap = createHtmlElement('lessons-wrap', 'div');
  const $lessons = createHtmlElement(lock ? 'lessons-lock' : 'lessons', 'div', lessonsInfo);
  $lessonsWrap.append($lessons);
  $InfoContainer.append($lessonsWrap);

  $trainingItem.append($InfoContainer);

  return $trainingItem;
}

function createEventsWindow() {
  const $eventsWindow = createHtmlElement('event-windows-container', 'div');
  const $header = createHtmlElement('event-window-header', 'div', 'Актуальные события');
  $eventsWindow.append($header);

  return $eventsWindow;
}


const linksData = [
  {local: '/image/attach.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/71/h/3f10654f98b8ae5676e530f3d9627f52.png'},
  {local: '/image/education.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/84/h/6524b412b6fe5040ae9ec551564b1e32.png'},
  {local: '/image/chat.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/401/h/1a6839779f617578f4408713416fb792.png'},
  {local: '/image/lock.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/284/h/f65552e0cfa4c504c4aec668e0d70a5f.png'},
  {local: '/image/m21.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/257/h/85f84b94a0714888d8edd04c8aeb3d4c.png'},
  {local: '/image/avatar.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/265/h/ddc8cc5a0e4b418d31ee03cc2554004c.png'},
  {local: '/image/m23.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/69/h/1855f2385559500eea8ef14e75f5269b.png'},
  {local: '/image/m24.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/348/h/5fae0f455a4d01f9f555ce4e3659ddcf.png'},
  {local: '/image/m34.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/248/h/a036ff3f7f3b5f3a684bcf7199d007a5.png'},
  {local: '/image/users.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/332/h/2ac20cfddce28c4efdae208339d69810.png'},
  {local: '/image/userPick.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/105/h/2e9ae8d9d2452d49323fb93098b2c206.png'},
  {local: '/image/tasks.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/241/h/b7576982c2ec2aab72627fea0e08bd63.png'},
  {local: '/image/profile.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/175/h/10c9beda9a80a070972ed0f012f3335d.png'},
  {local: '/image/messages.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/428/h/a3e79a63169858c19399083c411a3451.png'},
  {local: '/image/notification.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/188/h/f90b53e158d0d1c5a82c625e43bb559a.png'},
  {local: '/image/m36.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/159/h/e606c35b41c7e77d41aa9596997d31cc.png'},
  {local: '/image/sales.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/111/h/a4d3847899607cb68d6134fbe2f490b0.png'},
  {local: '/image/m25.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/371/h/5d4894db83471e711740844e93114130.png'},
  {local: '/image/m22.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/102/h/8332a508af1e6d395a6e1d6645e0d359.png'},
  {local: '/image/m72.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/316/h/a18f0075b9abc5c95e7f8fba88989f5a.png'},
  {local: '/image/m71.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/45/h/10730b3c998c0965db9d0008ea8a0681.png'},
  {local: '/image/vector5.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/164/h/63db836f427c2e8638d5af8e36058df1.png'},
  {local: '/image/mic.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/494/h/adaf735eec8cd5a5e5eb547ebeb369d7.png'},
  {local: '/image/smile.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/202/h/b645452cd1fbd1b9c55f617e56f647f0.png'},
  {local: '/image/site.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/40/h/3c21bca79c7054a76a1565507e19601d.png'},
  {local: '/image/m38.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/325/h/ca5a9d311b3c174bba836dac5d4d8b66.png'},
  {local: '/image/m32.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/51/h/99c28089aa3efa682b2508307d20b915.png'},
  {local: '/image/m39.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/386/h/352c4ed0977dc18df4daeafa38d761ac.png'},
  {local: '/image/m37.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/18/h/734e3428e662622709dbc697186b5ac8.png'},
  {local: '/image/m73.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/385/h/a2bcbb9e947addb14b75e764c17ad93c.png'},
  {local: '/image/m310.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/217/h/1e0dd585c9f5ce8d78681e96b02f961b.png'},
  {local: '/image/m33.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/431/h/d54ec9fbb9cdcd3ccd3b05a1c3c86952.png'},
  {local: '/image/m31.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/164/h/e3402b9768dba898cbe79f82d392b521.png'},
  {local: '/image/m52.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/185/h/08e71cd96ada0c22d9511331c383b9df.png'},
  {local: '/image/m54.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/392/h/c3654ccba7e9dc75dc01fea2f591c6e9.png'},
  {local: '/image/m63.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/79/h/05afc3f2d11441445bd802f730fd4038.png'},
  {local: '/image/m42.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/481/h/4ddff732f36afc2abde96157c1e6fbab.png'},
  {local: '/image/m53.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/88/h/946ef91f0904c23e010c1c14218f2f4f.png'},
  {local: '/image/m35.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/198/h/e1df81839cad304e185e5e3a4946c7b1.png'},
  {local: '/image/m61.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/356/h/1f9ca8b9e1ba054c63becde59e8928e9.png'},
  {local: '/image/m51.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/155/h/56dc9a08053ea931bd3d269a8790c58e.png'},
  {local: '/image/m62.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/50/h/e21224e16cdffcbbffbbdff033d60dec.png'},
  {local: '/image/m311.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/215/h/580169df175b4e5f5f8bcc73d9b77e60.png'},
  {local: '/image/m41.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/276/h/2a7bdb520a33dfefe248c013d976e01e.png'},
  {local: '/image/m43.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/79/h/3c942f29988ffdd881225ba763706b88.png'},
  {local: '/image/video-satoshkin.png', remote: 'https://fs.getcourse.ru/fileservice/file/download/a/582947/sc/442/h/eb6a5efe4bba7c5eaa9e1d92397fb906.png'},
];

function getRemotePath(path) {
  return linksData.find(item => item.local === path)?.remote;
}

const $toDelete = document.querySelector('.xdget-block');
// const $toDelete = document.querySelector('.page-full-block');
// const $toDelete = document.querySelector('.container');
//const $toDelete = document.querySelector('gc-main-content');

const $toParse = document.querySelectorAll('tr');

$toDelete.remove();

document.querySelector('.container').querySelector('.page-header').remove();
document.querySelector('.container').querySelector('div').remove();

const trainingData = [];

$toParse.forEach(item => {
  const $lock = item.classList.contains('no-public');
  item = item.querySelector('td');

  const $headerText = item.querySelector('span').innerText;
  const $lessonsInfo = item.querySelector('b')?.innerText.slice(0, item.querySelector('b').innerText.length - 1);
  const $href = item.querySelector('a').href;

  item.querySelector('div').querySelector('b')?.remove();
  const $div = item.querySelector('div').innerText;
  const index = $div.indexOf('.');
  const $authorInfo = $div.slice(0, index).trim();
  const $trainingInfo = $div.slice(index + 1).trim();

  trainingData.push(
    {
      header: $headerText,
      trainingInfo: $trainingInfo,
      authorInfo: $authorInfo,
      lessonsInfo: $lessonsInfo,
      href: $lock ? '' : $href,
      lock: $lock,
    },
  );
});

const $visible = createHtmlElement('main-layout', 'div');


const $menuSide = createHtmlElement('left-menu-side', 'div');

const $rightSection = createHtmlElement('right-section', 'div');

const $content = createHtmlElement('content-section', 'div');

const $header = createHtmlElement('header-section', 'div');
$header.append(generateHeader('Список тренингов'));
// верстка тренингов
const $trainingListContainer = createHtmlElement('training-list-container', 'div');
trainingData.forEach(item => {
  $trainingListContainer.append(createTrainingItem(
    item.header,
    item.trainingInfo,
    item.authorInfo,
    item.lessonsInfo,
    item.lock,
    item.href
  ));
});
$content.append($trainingListContainer);

// Верстка окна актуальных событий
$content.append(createEventsWindow());

$rightSection.append($header, $content)

$menuSide.append(createMenu());
$visible.append($menuSide, $rightSection);

document.querySelector('body').prepend($visible)
