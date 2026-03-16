let hamburger = document.getElementById('hamburger');
        let nav = document.getElementById('nav');

        // メニュー開閉処理
        function toggleMenu() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            const expanded = hamburger.classList.contains('active');
            hamburger.setAttribute('aria-expanded', expanded);
        }

        hamburger.addEventListener('click', toggleMenu);

        // キーボード操作対応（Enter / Space）
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });

        // メニューリンククリックで閉じる
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                hamburger.setAttribute('aria-expanded', false);
            });
        });

        //メインビジュアル
        let n = 1;
        let slide = setInterval(changphoto, 3000);
        function changphoto() {
                const photo = document.getElementById('photo');
                photo.style.opacity = 0.3;
                setTimeout(() => {
                    n++;
                    if (n > 5) {
                        n = 1;
                    }

                    let newfile = 'images/mainvisual' + n + '.jpg';
                    photo.setAttribute('src', newfile);
                    photo.style.opacity = 1;
                }, 300); 
            }

//お問い合わせフォーム
document.getElementById('send').addEventListener('click', sendclick);
            function sendclick() {
                let name_value = document.getElementById('name').value;
                let hiragana_value = document.getElementById('hiragana').value;
                let mail_value = document.getElementById('mail').value;
                let naiyo_value = document.getElementById('naiyo').value;
                let btn_check = document.getElementById('doi');

                if (name_value == "" || hiragana_value == "" || mail_value == "" || naiyo_value == "") {
                    if (name_value == "") {
                        document.getElementById('mess_name').textContent = "＊必須項目に入力してください";
                        document.getElementById('mess_name').style.color = 'red'
                        document.getElementById('name').style.background = 'pink'
                    } else {
                        document.getElementById('mess_name').textContent = "";
                        document.getElementById('name').style.background = 'none'
                    }
                    if (hiragana_value == "") {
                        document.getElementById('mess_hiragana').textContent = "＊必須項目に入力してください";
                        document.getElementById('mess_hiragana').style.color = 'red'
                        document.getElementById('hiragana').style.background = 'pink'
                    } else {
                        document.getElementById('mess_hiragana').textContent = "";
                        document.getElementById('hiragana').style.background = 'none'
                    }
                    if (mail_value == "") {
                        document.getElementById('mess_mail').textContent = "＊必須項目に入力してください";
                        document.getElementById('mess_mail').style.color = 'red'
                        document.getElementById('mail').style.background = 'pink'
                    } else {
                        document.getElementById('mess_mail').textContent = "";
                        document.getElementById('mail').style.background = 'none'
                    }
                    if (naiyo_value == "") {
                        document.getElementById('mess_naiyo').textContent = "＊必須項目に入力してください";
                        document.getElementById('mess_naiyo').style.color = 'red'
                        document.getElementById('naiyo').style.background = 'pink'
                    } else {
                        document.getElementById('mess_naiyo').textContent = "";
                        document.getElementById('naiyo').style.background = 'none'
                    }
                } else {
                    document.getElementById('mess_name').textContent = "";
                    document.getElementById('name').style.background = 'none'
                    document.getElementById('mess_hiragana').textContent = "";
                    document.getElementById('hiragana').style.background = 'none'
                    document.getElementById('mess_mail').textContent = "";
                    document.getElementById('mail').style.background = 'none'
                    document.getElementById('mess_naiyo').textContent = "";
                    document.getElementById('naiyo').style.background = 'none'

                    if (btn_check.checked) {
                        location.href = "contact_end.html";
                    } else {
                        document.getElementById('mess_doi').textContent = "＊必須項目に入力してください";
                        document.getElementById('mess_doi').style.color = 'red'
                    }
                }
        }
