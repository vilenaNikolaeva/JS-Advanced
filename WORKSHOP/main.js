;
(function softUniGame() {
    const gameStart = document.querySelector('.game-start');
    const gameArea = document.querySelector('.game-area');
    const gameOver = document.querySelector('.game-over');
    const gameScore = document.querySelector('.game-score');
    const gameScorePoints = document.querySelector(`.points`);
    const pressedKey = {};

    const wizardEl = document.createElement('div');
    wizardEl.classList.add('wizard');
    wizardEl.style.top = '200px';
    wizardEl.style.left = '200px';
    gameArea.appendChild(wizardEl);
    let player = {
        x: 150,
        y: 100,
        width: 0,
        height: 0,
        lastTimeFireFireball: 0,
    };
    player.width = wizardEl.offsetWidth;
    player.height = wizardEl.offsetHeight;

    let game = {
        speed: 2,
        movingMultiplier: 4,
        fireBallMultiblier: 5,
        fireInterval: 1000,
        claudSpawnInterval: 3000,
        bugSpawnInterval: 1000,
        bugKillBonus: 2000,
    };
    let scane = {
        score: 0,
        lastCloudSpawn: 0,
        lastBugSpawn: 0,
        isActiveGame: true
    };


    function gameAction(timestamp) {
        const wizard = document.querySelector('.wizard');


        //  Apply gravity
        // let isInAir = (player.y + player.height) <= gameArea.offsetHeight;
        // if (isInAir) { player.y += game.speed; }

        if (pressedKey.ArrowUp && player.y > 0) {
            player.y -= game.speed * game.movingMultiplier;
        } else if (pressedKey.ArrowDown && player.y + player.height < gameArea.offsetHeight) {
            player.y += game.speed * game.movingMultiplier;
        } else if (pressedKey.ArrowLeft && player.x > 0) {
            player.x -= game.speed * game.movingMultiplier;
        } else if (pressedKey.ArrowRight && player.x + player.width < gameArea.offsetWidth) {
            player.x += game.speed * game.movingMultiplier;
        }

        if (pressedKey.Space &&
            timestamp - player.lastTimeFireFireball > game.fireInterval) {
            wizard.classList.add('wizard-fire');
            addFireBall(player);
            player.lastTimeFireFireball = timestamp;
        } else {
            wizard.classList.remove('wizard-fire');
        }

        fireBallsAction();
        wizard.style.top = player.y + 'px';
        wizard.style.left = player.x + 'px';
        scane.score++;
        gameScorePoints.textContent = scane.score;
        addClouds(timestamp);
        cloudsAction();
        addBugs(timestamp);
        bugsPosition(wizard);
        if (scane.isActiveGame) {
            window.requestAnimationFrame(gameAction)
        }
    }

    function addFireBall(player) {
        let fireball = document.createElement('div');
        fireball.classList.add('fire-ball');
        fireball.style.top = (player.y + player.height / 3 - 5) + 'px';
        fireball.x = player.x + player.width;
        fireball.style.left = fireball.x + 'px';
        gameArea.appendChild(fireball);
    }

    function fireBallsAction() {
        let fireBalls = document.querySelectorAll('.fire-ball');
        fireBalls.forEach(fireBall => {
            fireBall.x += game.speed * game.fireBallMultiblier;
            fireBall.style.left = fireBall.x + 'px';

            if (fireBall.x + fireBall.offsetWidth > gameArea.offsetWidth) {
                fireBall.parentElement.removeChild(fireBall);
            }
        })
    }

    function addClouds(timestamp) {
        if (timestamp - scane.lastCloudSpawn > game.claudSpawnInterval + 20000 * Math.random()) {
            let cloud = document.createElement('div');
            cloud.classList.add('cloud');
            cloud.x = gameArea.offsetWidth - 200;
            cloud.style.left = cloud.x + 'px';
            cloud.style.top = (gameArea.offsetHeight - 200) * Math.random() + 'px';
            gameArea.appendChild(cloud);
            scane.lastCloudSpawn = timestamp;
        }
    }

    function cloudsAction() {
        let cloudss = document.querySelectorAll('.cloud');
        cloudss.forEach(cloud => {
            cloud.x -= game.speed;
            cloud.style.left = cloud.x + 'px';
            if (cloud.x + cloudsAction.offsetWidth <= 0) {
                cloud.parentElement.remove(cloud);
            }
        });
    }

    function addBugs(timestamp) {
        if (timestamp - scane.lastBugSpawn > game.bugSpawnInterval + 5000 * Math.random()) {
            let bug = document.createElement('div');
            bug.classList.add('bug');
            bug.x = gameArea.offsetWidth - 60;
            bug.style.left = bug.x + 'px';
            bug.style.top = (gameArea.offsetHeight - 60) * Math.random() + 'px';
            gameArea.appendChild(bug);
            scane.lastBugSpawn = timestamp;
        }
    }

    function bugsPosition(wizard) {
        const bugs = document.querySelectorAll('.bug');
        const fireBalls = document.querySelectorAll('.fire-ball');
        bugs.forEach(bug => {
            bug.x -= game.speed * 3;
            bug.style.left = bug.x + 'px';
            if (bug.x + bugs.offsetHeight <= 0) {
                bug.parentElement.removeChild(bug);
            } else {
                bugs.forEach(bug => {
                    if (isCollision(wizard, bug)) {
                        gameOverAction();
                    }
                })
                fireBalls.forEach(fb => {
                    if (isCollision(fb, bug)) {
                        scane.score += game.bugKillBonus;
                        bug.parentElement.removeChild(bug);
                        fb.parentElement.removeChild(fb);
                        console.log('damn! You died!')
                    }
                })
            }
        });
    }

    function isCollision(first, second) {
        const firstRec = first.getBoundingClientRect();
        const secondRec = second.getBoundingClientRect();

        return !(firstRec.top > secondRec.bottom ||
            firstRec.bottom < secondRec.top ||
            firstRec.right < secondRec.left ||
            firstRec.left > secondRec.right)
    }

    function gameOverAction() {
        scane.isActiveGame = false;
        gameOver.classList.remove('hide');
    }

    gameStart.addEventListener('click', function onGameStart() {
        gameStart.classList.add('hide');
        window.requestAnimationFrame(gameAction);
    });

    document.addEventListener('keydown', function onKeyDown(e) {
        pressedKey[e.code] = true;
    });

    document.addEventListener('keyup', function onKeyUp(e) {
        pressedKey[e.code] = false;
    });
}());