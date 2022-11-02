function createHtmlElement(className, tagName = 'div', textContent, lock = false, src) {
  const $element = document.createElement(tagName);
  if (className) {
    $element.classList.add(className);
  }
  if (textContent) {
    $element.innerText = textContent;
  }
  if (tagName === 'img') {
    $element.src = src;
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

function createModuleTemplate(className, module, index) {
  const $itemModuleTemplate = createHtmlElement(`module-item`, 'div');
  const $rectangle = createHtmlElement(`module-rectangle`, 'div');
  const $image = createHtmlElement(`module${module}-image`, 'img', '', true, `/image/m${module}${index}.png`);
  $rectangle.append($image);
  $itemModuleTemplate.append($rectangle);

  return $itemModuleTemplate;
}

function createTrainingItem(header, trainingInfo, authorInfo, lessonsInfo, lock = false) {
  const className = '';

  const $trainingItem = createMainTemplate(className, lock);

  const $ContentContainer = createHtmlElement('content-container', 'div');
  const $line1 = createHtmlElement('line1', 'div', header);
  const $line2 = createHtmlElement('line2', 'div', trainingInfo);
  $ContentContainer.append($line1);
  $ContentContainer.append($line2);

  $trainingItem.append($ContentContainer);

  const $InfoContainer = createHtmlElement('info-container', 'div');
  const $author = createHtmlElement('author', 'div', authorInfo);
  $InfoContainer.append($author);

  const $lessonsWrap = createHtmlElement('lessons-wrap', 'div');
  const $lessons = createHtmlElement('lessons', 'div', lessonsInfo);
  $lessonsWrap.append($lessons);
  $InfoContainer.append($lessonsWrap);

  $trainingItem.append($InfoContainer);

  return $trainingItem;
}

function createSubTrainingItem(header, lock = false) {
  const className = 'sub-';

  const $subTrainingItem = createMainTemplate(className, lock);
  const $header = createHtmlElement(`${className}header`, 'div', header);
  $subTrainingItem.append($header);

  return $subTrainingItem;
}

function createModuleItem(header, date, task, description, module, index) {
  const className = `module${module}`;
  const $moduleItem = createModuleTemplate(className, module, index);

  const $line1Wrap = createHtmlElement('module-line1-wrap', 'div');
  const $isTask = createHtmlElement('module-isTask', 'div', task ? 'Необходимо выполнить задание' : '');
  const $date = createHtmlElement('module-date', 'div', date);
  $line1Wrap.append($isTask, $date);

  const $headerWrap = createHtmlElement('module-header-wrap', 'div');
  const $header = createHtmlElement('module-header', 'div', header);
  const $description = createHtmlElement('module-description', 'div', description);
  $headerWrap.append($header, $description);

  $moduleItem.append($line1Wrap, $headerWrap);

  return $moduleItem;
}

function createEventsWindow() {
  const $eventsWindow = createHtmlElement('event-windows-container', 'div');
  const $header = createHtmlElement('event-window-header', 'div', 'Актуальные события');
  $eventsWindow.append($header);

  return $eventsWindow;
}

function createAchievementsWindow() {
  const $achievementsWindow = createHtmlElement('achievements-windows-container', 'div');

  const $achievementsLine1 = createHtmlElement('achievements-line1-wrap', 'div');
  const $achievementsHeader = createHtmlElement('achievements-header', 'div', 'Ваши достижения')
  $achievementsLine1.append($achievementsHeader);

  const $achievementsLine2 = createHtmlElement('achievements-line2-wrap', 'div');
  const $achieveCaption = createHtmlElement('achievements-caption', 'div', '“Шкала достижений”')
  const $achieveScale = createHtmlElement('achievements-scale', 'div', '10 баллов');
  $achievementsLine2.append($achieveCaption, $achieveScale);

  $achievementsWindow.append($achievementsLine1, $achievementsLine2);
  return $achievementsWindow;
}

function creatButton(className, src) {
  const $button = createHtmlElement(className, 'div');
  const $image = createHtmlElement(`${className}-image`, 'img', '', true, src);
  $button.append($image);

  return $button
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

function createWebinarPage() {
  const className = 'webinar-page';
  const $webinarPage = createHtmlElement(`${className}-container`, 'div');

  const $header = createHtmlElement(`${className}-header`, 'div', 'Вебинар по боту Satoshkin');

  const $navigateBar = createHtmlElement(`${className}-navigate-container`, 'div');
  const $prevLesson = createHtmlElement(`${className}-prev-link`, 'a', '« Предыдущий урок');
  const $currentLesson = createHtmlElement(`${className}-current-lesson`, 'div', '1 из 10 уроков');
  const $nextLesson = createHtmlElement(`${className}-next-link`, 'a', 'Следующий урок »');
  $navigateBar.append($prevLesson, $currentLesson, $nextLesson);

  const $video = createHtmlElement(`${className}-video`, 'img', '', true, '/image/video-satoshkin.png');

  const $task = createHtmlElement(`${className}-task-container`, 'div');
  const $lineDraw = createHtmlElement(`${className}-task-line`, 'div');
  const $taskButton = createHtmlElement(`${className}-task-button-container`, 'div');
  const $buttonCaption = createHtmlElement(`${className}-task-button-caption`, 'div', 'Задание');
  $taskButton.append($buttonCaption);

  $task.append($lineDraw, $taskButton);

  const $taskDescription = createHtmlElement(`${className}-task-description`, 'div', 'Текст задания к уроку, текст задания к уроку');

  const $form = createHtmlElement(`${className}-task-form`, 'form');
  const $formLine1 = createHtmlElement(`${className}-task-form-line1`, 'div');
  const $avatar = createHtmlElement(`${className}-task-form-avatar`, 'img', '', true, '/image/avatar.png');
  const $answerBox = createHtmlElement(`${className}-task-form-answerbox`, 'textarea');
  $answerBox.type = 'text';
  $answerBox.cols = 4;
  $answerBox.placeholder = ' ваш ответ';
  const $smile = createHtmlElement(`${className}-task-form-smile`, 'img', '', true, '/image/smile.png');
  $formLine1.append($avatar, $answerBox, $smile);

  const $formLine2 = createHtmlElement(`${className}-task-form-line2`, 'div');
  const $addFilesButton = createHtmlElement(`${className}-task-form-button`, 'div');
  const $input = createHtmlElement(`${className}-task-form-input`, 'div', 'Добавить файлы');
  const $inputImg = createHtmlElement(`${className}-task-form-button-img`, 'img', '', true, '/image/vector5.png');
  $addFilesButton.append($input, $inputImg);

  const $checkBoxContainer = createHtmlElement(`${className}-task-form-checkbox-container`, 'div');
  const $checkBox = createHtmlElement(`${className}-task-form-checkbox`, 'input');
  $checkBox.type = 'checkbox';
  const $checkBoxDescription = createHtmlElement(`${className}-task-form-checkbox-description`, 'div', 'Скрывать ответ от других учеников (будет виден только преподавателю)');
  $checkBoxContainer.append($checkBox, $checkBoxDescription);

  $formLine2.append($addFilesButton, $checkBoxContainer);

  const $formLine3 = createHtmlElement(`${className}-task-form-line3`, 'div');
  const $submitButton = createHtmlElement(`${className}-task-form-submit`, 'div', 'Отправить ответ');
  const $saveDraft = createHtmlElement(`${className}-task-form-save`, 'div', 'Сохранить черновик');
  $formLine3.append($submitButton, $saveDraft);

  $form.append($formLine1, $formLine2, $formLine3);

  $webinarPage.append($header, $navigateBar, $video, $task, $taskDescription, $form);

  return $webinarPage;
}

function createCommentContainer(className, comment, userName) {
  const $commentContainer = createHtmlElement(`${className}-comment-container`, 'div');

  const $section1 = createHtmlElement(`${className}-comment-container-section1`, 'div');
  const $section2 = createHtmlElement(`${className}-comment-container-section1`, 'div');

  const $userAvatar = createHtmlElement(`${className}-comment-avatar`, 'img', '', true, '/image/userPick.png');
  const $userInfoContainer = createHtmlElement(`${className}-comment-userinfo-container`, 'div');
  const $userName = createHtmlElement(`${className}-comment-username`, 'div', userName);
  const $userComment = createHtmlElement(`${className}-comment-usercomment`, 'div', comment);
  $userInfoContainer.append($userName, $userComment);
  $section1.append($userAvatar, $userInfoContainer);

  const $commentSectionContainer = createHtmlElement(`comment-section-container`, 'div');

  const $userCommentAvatar = createHtmlElement(`comment-avatar-small`, 'img', '', true, '/image/avatar.png');

  const $pickContainer = createHtmlElement(`button-panel-container`, 'div');
  const $mic = createHtmlElement(`mic-image`, 'img', '', true, '/image/mic.png');
  const $attach = createHtmlElement(`attach-image`, 'img', '', true, '/image/attach.png');
  const $smile = createHtmlElement(`smile-image`, 'img', '', true, '/image/smile.png');
  $pickContainer.append($mic, $attach, $smile);

  const $commentInput = createHtmlElement(`comment-input`, 'input');
  $commentInput.type = 'text';
  $commentInput.placeholder = ' добавить комментарий к ответу';

  $commentSectionContainer.append($userCommentAvatar, $commentInput, $pickContainer);
  $section2.append($commentSectionContainer);

  $commentContainer.append($section1, $section2);

  return $commentContainer;
}

function createAnswerPage() {
  const className = 'answer-page';
  const $answerPage = createHtmlElement(`${className}-container`, 'div');

  const $answers = createHtmlElement(`${className}-answers-container`, 'div');
  const $lineDraw = createHtmlElement(`${className}-answers-line`, 'div');
  const $taskButton = createHtmlElement(`${className}-answers-button-container`, 'div');
  const $buttonCaption = createHtmlElement(`${className}-answers-button-caption`, 'div', 'Ответы и комментарии');
  $taskButton.append($buttonCaption);

  $answers.append($lineDraw, $taskButton);

  const $formLine1 = createHtmlElement(`${className}-task-form-line1`, 'div');
  const $avatar = createHtmlElement(`${className}-task-form-avatar`, 'img', '', true, '/image/avatar.png');
  const $answerBox = createHtmlElement(`${className}-task-form-answerbox`, 'textarea');
  $answerBox.type = 'text';
  $answerBox.cols = 4;
  $answerBox.placeholder = ' добавить комментарий к уроку';
  const $smile = createHtmlElement(`${className}-task-form-smile`, 'img', '', true, '/image/smile.png');
  $formLine1.append($avatar, $answerBox, $smile);

  $answerPage.append($answers, $formLine1,
    createCommentContainer(className, 'Задание выполнено! Спасибо за урок :)', 'Фомичева Дарья • Чт 28 Окт 2021'),
    createCommentContainer(className, 'Задание выполнено! Спасибо за урок :)', 'Фомичева Дарья • Чт 28 Окт 2021'),
    createCommentContainer(className, 'Задание выполнено! Спасибо за урок :)', 'Фомичева Дарья • Чт 28 Окт 2021')
  );

  return $answerPage;
}

function generateHeader(text) {
  const $header = createHtmlElement('header-text', 'div', text);
  const $line = createHtmlElement('header-line', 'div');
  $header.append($line);

  return $header;
}

function createPageTemplate(index) {
  const $visible = createHtmlElement('main-layout', 'div');

  if ((index >= 0 && index < 2) || (index > 3)) {
    const $menuSide = createHtmlElement('left-menu-side', 'div');

    const $rightSection = createHtmlElement('right-section', 'div');
    const $header = createHtmlElement('header-section', 'div');
    const $content = createHtmlElement('content-section', 'div');

    if (index === 0) {
      $header.append(generateHeader('Список тренингов'));
      // верстка тренингов
      const $trainingListContainer = createHtmlElement('training-list-container', 'div');
      trainingData.forEach(item => {
        $trainingListContainer.append(createTrainingItem(
          item.header,
          item.trainingInfo,
          item.authorInfo,
          item.lessonsInfo,
          item.lock
        ));
      });
      $content.append($trainingListContainer);

      // Верстка окна актуальных событий
      $content.append(createEventsWindow());
    }

    if (index === 1) {
      $header.append(generateHeader('Автоматизация трейдинга \nна P2P-платформах. Бот Satoshkin'));
      // верстка подтренингов
      const $subTrainingListContainer = createHtmlElement('sub-training-list-container', 'div');
      subTrainingData.forEach(item => {
        $subTrainingListContainer.append(createSubTrainingItem(
          item.header,
          item.lock
        ));
      });
      $content.append($subTrainingListContainer);
    }

    if (index === 4) {
      $header.append(generateHeader('Модуль 2'));
      // Верстка Модулей/уроков
      const $moduleContainer = createHtmlElement('module-container', 'div');
      moduleData_2.forEach((item, index) => {
        $moduleContainer.append(createModuleItem(item.header, item.date, item.task, item.description, '2', String(index + 1)));
      });
      $content.append($moduleContainer);

      // Верстка окна достижений
      $content.append(createAchievementsWindow());
    }

    if (index === 5) {
      $header.append(generateHeader('Модуль 3'));
      // Верстка Модулей/уроков
      const $moduleContainer = createHtmlElement('module-container', 'div');
      moduleData_3.forEach((item, index) => {
        $moduleContainer.append(createModuleItem(item.header, item.date, item.task, item.description, '2', String(index + 1)));
      });
      $content.append($moduleContainer);

      // Верстка окна достижений
      $content.append(createAchievementsWindow());
    }

    if (index === 6) {
      $header.append(generateHeader('Модуль 4'));
      // Верстка Модулей/уроков
      const $moduleContainer = createHtmlElement('module-container', 'div');
      moduleData_4.forEach((item, index) => {
        $moduleContainer.append(createModuleItem(item.header, item.date, item.task, item.description, '2', String(index + 1)));
      });
      $content.append($moduleContainer);

      // Верстка окна достижений
      $content.append(createAchievementsWindow());
    }

    if (index === 7) {
      $header.append(generateHeader('Модуль 5'));
      // Верстка Модулей/уроков
      const $moduleContainer = createHtmlElement('module-container', 'div');
      moduleData_5.forEach((item, index) => {
        $moduleContainer.append(createModuleItem(item.header, item.date, item.task, item.description, '2', String(index + 1)));
      });
      $content.append($moduleContainer);

      // Верстка окна достижений
      $content.append(createAchievementsWindow());
    }

    if (index === 8) {
      $header.append(generateHeader('Модуль 6'));
      // Верстка Модулей/уроков
      const $moduleContainer = createHtmlElement('module-container', 'div');
      moduleData_6.forEach((item, index) => {
        $moduleContainer.append(createModuleItem(item.header, item.date, item.task, item.description, '2', String(index + 1)));
      });
      $content.append($moduleContainer);

      // Верстка окна достижений
      $content.append(createAchievementsWindow());
    }

    if (index === 9) {
      $header.append(generateHeader('Модуль 7'));
      // Верстка Модулей/уроков
      const $moduleContainer = createHtmlElement('module-container', 'div');
      moduleData_7.forEach((item, index) => {
        $moduleContainer.append(createModuleItem(item.header, item.date, item.task, item.description, '2', String(index + 1)));
      });
      $content.append($moduleContainer);

      // Верстка окна достижений
      $content.append(createAchievementsWindow());
    }

    $rightSection.append($header, $content)

    $menuSide.append(createMenu());
    $visible.append($menuSide, $rightSection);

  }

  if (index >=2 && index <= 3) {
    const $content = createHtmlElement('content-section', 'div');

    if (index === 2) {
      // Верстка стриницы вебинара
      $content.append(createWebinarPage());
    }

    if (index === 3) {
      // Верстка страницы ответов и комментариев
      $content.append(createAnswerPage());
    }

    $visible.append($content);
  }


  return $visible;
}

const trainingData = [
  {
    header: 'Автоматизация трейдинга на P2P-платформах. Бот Satoshkin',
    trainingInfo: 'Бот Satoshkin автоматизирует трейдинг на P2P-платформах и помогает зарабатывать. На вебинаре мы подробно расскажем о функционале бота, покажем как добавить аккаунты P2P-платформ, как настроить трейдинг, в прямом эфире понаблюдаем как работает бот \n --- \n satoshkin.com',
    authorInfo: 'Дмитрий Степанин',
    lessonsInfo: '10 уроков',
    lock: true,
  },
  {
    header: 'Собственный бизнес на обмене криптовалют. \nБесплатный вебинар',
    trainingInfo: 'Описание',
    authorInfo: 'Дмитрий Степанин',
    lessonsInfo: '17 уроков',
    lock: false,
  },
  {
    header: 'Собственный бизнес на обмене криптовалют за три дня. \nБазовый',
    trainingInfo: 'Описание',
    authorInfo: 'Дмитрий Степанин',
    lessonsInfo: '3 урока',
    lock: false,
  },
  {
    header: 'Собственный бизнес на обмене криптовалют за три дня. \nПродвинутый',
    trainingInfo: 'Описание',
    authorInfo: 'Дмитрий Степанин',
    lessonsInfo: '2 урока',
    lock: false,
  },
];

const subTrainingData = [
  {
    header: 'Вебинар по боту Satoshkin',
    lock: false,
  },
  {
    header: 'Автоматизация трейдинга\n на P2P-платформах. Бот Satoshkin',
    lock: true,
  },
];

const moduleData_2 = [
  {
    header: 'Вводный урок',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: true
  },
  {
    header: 'Информационная безопасность',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Правовые вопросы',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Как продлить жизнь картам?',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Мошеннические схемы',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
];

const moduleData_3 = [
  {
    header: 'P2P-платформы: на каких платформах \nрегистрируем аккаунты',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: true
  },
  {
    header: 'Регистрация и верификация аккаунтов',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Мониторинги агрегаторы P2P-платформ',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Криптофиатные биржи',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'P2P-платформа Bitzlato',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'P2P-платформа LocalBitcoins',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: true
  },
  {
    header: 'P2P-платформа Savl',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Биржа и ОТС Desk Garantex',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'P2P-платформа Risex и торговля \nна сим картах',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Таблица со всеми чатами и каналами \nP2P-платформ',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'P2P-платформа BitcoinGlobal и биржа WhiteBit',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
];

const moduleData_4 = [
  {
    header: 'Настройка и наполнение аккаунтов, маркетинг',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: true
  },
  {
    header: 'Создание и настройка объявлений',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Прокачка аккаунтов',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
];

const moduleData_5 = [
  {
    header: 'Первые сделки',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: true
  },
  {
    header: 'Лимиты',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Взаимодействие с клиентом',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Поддержка P2P-платформ',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
];

const moduleData_6 = [
  {
    header: 'Криптокошельки',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: true
  },
  {
    header: 'Переводы между р2р-платформами',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Грязный биток',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Pandee',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
];

const moduleData_7 = [
  {
    header: 'Банки',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: true
  },
  {
    header: 'Нежелательные и опасные операции',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Тинькофф/Сбер',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Дропы',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Стягивание',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
  {
    header: 'Киви без блокировок',
    description: 'Описание',
    date: 'Дата и время начала урока',
    task: false
  },
];

function navigate() {
  const $navigate = createHtmlElement('navigate', 'div');
  const $prevButton = createHtmlElement('navigate-prev-button', 'button', 'Предыдущая');
  $prevButton.disabled = true;
  const $nextButton = createHtmlElement('navigate-next-button', 'button', 'Следующая');

  let counter = 0;
  $prevButton.addEventListener('click', (event) => {
    if (counter !== 0) {
      document.querySelector('.main-layout').remove();

      counter--;
      document.querySelector('body').append(createPageTemplate(counter));

    }
    if (counter === 0) {
      document.querySelector('.navigate-prev-button').disabled = true;
    } else {
      document.querySelector('.navigate-prev-button').disabled = false;
      document.querySelector('.navigate-next-button').disabled = false;
    }
  });
  $nextButton.addEventListener('click', (event) => {
    if (counter < 9) {
      document.querySelector('.main-layout').remove();
      counter++;

      document.querySelector('body').append(createPageTemplate(counter));
    }
    if (counter === 9) {
      document.querySelector('.navigate-next-button').disabled = true;
    } else {
      document.querySelector('.navigate-next-button').disabled = false;
      document.querySelector('.navigate-prev-button').disabled = false;
    }
  });

  $navigate.append($prevButton, $nextButton);

  document.querySelector('body').append(createPageTemplate(counter));
  return $navigate;
}

document.querySelector('body').append(navigate());
