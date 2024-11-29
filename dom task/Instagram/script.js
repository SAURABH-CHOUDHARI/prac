let data = [

    {
        "username": "travel_diaries",
        "userlocation": "Paris, France",
        "userprofile": "https://images.unsplash.com/photo-1524638431109-93d95c968f03?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=3546&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 1200,
        "commentCount": 45,
        "shareCount": 30,
        "caption": "Enjoying the sunset at the Eiffel Tower. #ParisVibes #TravelGoals",
        "timeAgoUploaded": 5
    },
    {
        "username": "foodie_lover",
        "userlocation": "Mumbai, India",
        "userprofile": "https://images.unsplash.com/photo-1487069838269-7c05365b400b?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1554978991-33ef7f31d658?q=80&w=2620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": false,
        "likeCount": 530,
        "commentCount": 20,
        "shareCount": 12,
        "caption": "The best vada pav I've ever had! 🌮❤ #MumbaiStreetFood",
        "timeAgoUploaded": 12
    },
    {
        "username": "fitness_freak",
        "userlocation": "New York, USA",
        "userprofile": "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1485727749690-d091e8284ef3?q=80&w=3532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 800,
        "commentCount": 60,
        "shareCount": 25,
        "caption": "Start your day with some yoga. #FitnessGoals #HealthyLiving",
        "timeAgoUploaded": 24
    },
    {
        "username": "artsy_corner",
        "userlocation": "London, UK",
        "userprofile": "https://images.unsplash.com/photo-1647205552933-12e3dfdb77b5?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://plus.unsplash.com/premium_photo-1692650759141-ed71d789ef1b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": true,
        "likeCount": 950,
        "commentCount": 78,
        "shareCount": 40,
        "caption": "New piece in the gallery. Let me know your thoughts! 🎨 #AbstractArt",
        "timeAgoUploaded": 7
    },
    {
        "username": "adventure_seeker",
        "userlocation": "Kyoto, Japan",
        "userprofile": "https://images.unsplash.com/photo-1681562978415-bbf1dfe59353?q=80&w=2624&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "userPost": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "like": false,
        "likeCount": 600,
        "commentCount": 33,
        "shareCount": 18,
        "caption": "The serenity of Kyoto's bamboo forest. 🌳 #NatureLover",
        "timeAgoUploaded": 18
    }
]

let story = document.querySelector(".story");
let page = document.querySelector(".page");
let poster = document.querySelector('.page .post')

let storyimg = "";

function posts() {
    let post = "";
    data.forEach((elem, idx) => {
        storyimg += `<div class="storyitem" >
                    <img src="${elem.userprofile}" alt="">
                    <span>${elem.username}</span>
                </div>`
        post += `<div class="post">
        <div class="userinfo">
            <div class="user">
                <img src="${elem.userprofile}" alt="" >
                <h6 class="name">${elem.username}</h6>
            </div>
            <img src="https://img.icons8.com/ios-glyphs/30/menu-2.png" alt="" id"${idx + 10}">
        </div>
        <img src="${elem.userPost}" alt="">
        <div class="likeshare">
            <div class="button">
                            <div class="${elem.like ? "like" : "nolike"}">
                                <img src="https://img.icons8.com/ios/50/hearts--v1.png" alt="" id="${idx}">
                                <span>${elem.likeCount}</span>
                            </div>
                            <div class="comment">
                                <img src="https://cdn0.iconfinder.com/data/icons/social-media-logo-4/32/Social_Media_instagram_comment-512.png"
                                    alt="">
                                <span>${elem.commentCount}</span>
                            </div>
                            <div class="share">
                                <img src="https://cdn2.iconfinder.com/data/icons/instagram-17/32/11-share-512.png" alt="">
                                <span>${elem.shareCount}</span>
                            </div>
                        </div>
            <img src="https://cdn0.iconfinder.com/data/icons/social-media-logo-4/32/Social_Media_instagram_save_save_instagram-512.png" alt="" class="save">
        </div>
        <h5 class="likecount">${elem.likeCount} likes</h5>
        <p class="cap"><span>${elem.username}</span> ${elem.caption}</p>
        <h6 class="timestamp">${elem.timeAgoUploaded} hours ago</h6>
    </div>`
    })
    page.innerHTML = post;
    story.innerHTML = storyimg;
}
posts();

let modal = document.querySelector(".modal");
let modalimg = document.querySelector(".modal .expand")
let stories = document.querySelectorAll(".storyitem img");
let close = document.querySelector(".modal .close")
let bar = document.querySelector(".modal .bar")

stories.forEach(story => {
    story.addEventListener("click", function () {
        modal.style.display = 'flex';
        modalimg.src = story.src;
        modal.style.position = "fixed";
        setTimeout(function () {
            modal.style.display = "none";
            modalimg.src = "";
        }, 6000)
    })
})
close.addEventListener("click", function () {
    modal.style.display = "none";
    modalimg.src = "";
    bar.style.width = '0%'
})

page.addEventListener("click", function (dets) {
    if (!data[dets.target.id].like) {
        data[dets.target.id].likeCount++;
        data[dets.target.id].like = true;
    }
    else{
        data[dets.target.id].likeCount--;
        data[dets.target.id].like = false;
    }
    posts();
});


