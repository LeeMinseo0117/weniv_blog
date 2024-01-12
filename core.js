// config.js에서 가져온 설정을 사용
// document.documentElement.style.setProperty('--main-color', siteConfig.mainColor);
// document.documentElement.style.setProperty('--text-color', siteConfig.textColor);

// config에서 값이 없을 경우 URL에서 추출
const urlConfig = extractFromUrl();
siteConfig.username = siteConfig.username || urlConfig.username;
siteConfig.repositoryName = siteConfig.repositoryName || urlConfig.repositoryName;

// 블로그 제목 설정
const $blogTitle = document.getElementById('blog-title')
$blogTitle.innerText = siteConfig.blogTitle || 'GitHub Blog';
// 클릭했을 때 메인페이지로 이동
$blogTitle.onclick = () => {
    window.location.href = `https://${siteConfig.username}.github.io/${siteConfig.repositoryName}/`;
};


// URL에서 username과 repositoryName 추출
function extractFromUrl() {
    const url = new URL(window.location.href);
    const pathParts = url.pathname.split('/').filter(part => part.length > 0);

    // 보통 URL 형식: https://username.github.io/repositoryName/
    if (pathParts.length >= 2) {
        return {
            username: pathParts[0],
            repositoryName: pathParts[1]
        };
    }

    return { username: '', repositoryName: '' };
}

// GitHub API를 사용하여 폴더 내의 파일 목록 가져오기
async function loadFolderContents(folderPath) {
    const response = await fetch(`https://api.github.com/repos/${siteConfig.username}/${siteConfig.repositoryName}/contents/${folderPath}`);
    const data = await response.json();
    return data;
}

// 메뉴 생성
loadFolderContents('menu').then(files => {
    files.forEach(file => {
        // 메뉴 링크 생성
        const link = document.createElement('a');
        
        // tailwind를 사용한 스타일링
        // <div id="contents" class="mt-6 grid-cols-3"></div> 안에 들어가는 link들의 스타일링
        // card 형태로 이미지 + 제목 + 내용 + 저자 + 날짜가 들어가게 됨
        link.classList.add('ml-4', 'text-gray-700', 'hover:text-gray-900', 'font-bold', 'text-xl', 'py-2', 'px-4', 'rounded');
        
        link.classList.add(`${file.name}`);
        link.href = file.download_url;
        // 확장자를 제외하고 이름만 innerText로 사용
        const fileName = file.name.split('.')[0];
        link.innerText = fileName;
        link.onclick = (event) => {
            // 메뉴 링크 클릭 시 이벤트 중지 후 file 내용을 읽어와 contents 영역에 렌더링
            event.preventDefault();

            if (file.name === 'blog.md') {
                // 만약 블로그라면 contents 영역을 없애고 블로그 포스트 목록을 보여줌
                document.getElementById('contents').style.display = 'none';
                document.getElementById('blog-posts').style.display = 'block';
                readPostList();
            } else {
                // 그렇지 않으면 blog-posts를 비우고 contents 영역에 파일 내용을 렌더링
                document.getElementById('blog-posts').style.display = 'none';
                document.getElementById('contents').style.display = 'block';
                fetch(file.download_url)
                    .then(response => response.text())
                    .then(text => {
                        document.getElementById('contents').innerHTML = marked.parse(text);
                    });
            }
            
        };
        document.getElementById('menu').appendChild(link);
    });
});

function readPostList(){
    // 포스트 목록 읽어오는 함수
    loadFolderContents('blog').then(files => {
        // blog-posts 영역을 초기화, 초기화 하지 않으면 중복으로 렌더링됨
        document.getElementById('blog-posts').innerHTML = '';
        files.forEach(file => {
            // 블로그 게시글 링크 생성
            const postLink = document.createElement('a');

            // tailwind를 사용한 스타일링
            postLink.classList.add('ml-4', 'text-gray-700', 'hover:text-gray-900', 'font-bold', 'text-xl', 'py-2', 'px-4', 'rounded');

            postLink.href = `#`;
            postLink.innerText = file.name;
            postLink.onclick = (event) => {
                // 블로그 게시글 링크 클릭 시 이벤트 중지 후 file 내용을 읽어와 contents 영역에 렌더링
                event.preventDefault();
                // contents 영역을 보이게 처리
                document.getElementById('contents').style.display = 'block';
                // blog-posts 영역을 보이지 않게 처리
                document.getElementById('blog-posts').style.display = 'none';
                fetch(file.download_url)
                    .then(response => response.text())
                    .then(text => {
                        document.getElementById('contents').innerHTML = marked.parse(text);
                    });
            };
            document.getElementById('blog-posts').appendChild(postLink);
        });
    });
    // contents 영역을 보이지 않게 처리
    document.getElementById('contents').style.display = 'none';
}

readPostList()