for (let i = 0; i < 5; i++) {
    let element = `

    <div class="box">

    <div class="image-box">
        <img src="assets/images/content.jpg" alt="">
    </div>
    <div class="content-box">

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
            <img src="assets/images/profile 1.png" alt="profile">
        </div>

        <div class="left-profile-cont">
            <p class="name-user">صالح وفایی</p>
            <p class="normal-text">2 مرداد 1401</p>

        </div>


    </div>
    </div>

</div>

`;
    document.querySelector(".box-cont").innerHTML += element

}