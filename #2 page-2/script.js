for (let i = 0; i < 5; i++) {
    let element = `

    <div class="content">

    <div class="image-content">
        <img src="../images/content.jpg" alt="">
    </div>

    <div class="mini-title-cont">
        <p class="mini-title">برنامه نویسی </p>
    </div>


    <div class="normal-title-cont">
        <h4>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
        </h4>
    </div>

    <div class="normal-text">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
    </div>

    <div class="profile-cont">

        <div class="image-profile-cont">
            <img src="../images/profile 1.png" alt="profile">
        </div>

        <div class="left-profile-cont">
            <p class="name-user">صالح وفایی</p>
            <p class="normal-text">nov 5 2022</p>

        </div>


    </div>

</div>

`;
    document.querySelector(".content-cont").innerHTML += element

}