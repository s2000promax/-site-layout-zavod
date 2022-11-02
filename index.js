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

function createSubTrainingItem(header, lock = false) {
  const className = 'sub-';

  const $subTrainingItem = createMainTemplate(className, lock);
  const $header = createHtmlElement(lock ? `${className}header-lock` : `${className}header`, 'div', header);
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
