import React from "react";
import Title from "./../components/Title";
import { assets } from "./../assets/assets";
import NewsletterBox from './../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, esse
            sunt illo est officiis aspernatur molestias numquam deserunt
            veritatis vel, id quos provident dolore doloremque assumenda impedit
            laborum aliquid animi! Iure quos architecto illum, aspernatur rerum
            placeat libero fugit consequuntur officia error velit, quidem non
            vel. Incidunt distinctio sed eum.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem, eius fuga! Illum dolore aliquid deleniti commodi ut
            veritatis saepe inventore! Velit atque eos, omnis cumque minus, quas
            quae iusto explicabo voluptatibus, rerum natus hic? Amet pariatur,
            labore laborum quos maxime adipisci eaque repellat accusantium in
            minima atque voluptatibus deserunt eum impedit sed sint accusamus
            eligendi voluptatem hic ea cupiditate nulla!
          </p>
          <b className="text-gray-800">OUR MISSION</b>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            accusantium mollitia tempora nihil aperiam eum iure omnis modi!
            Fugiat, necessitatibus.
          </p>
        </div>
      </div>
      <div className="text-3xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row mb-20 text-sm">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius minus
            voluptates, blanditiis ipsam sed asperiores quasi perferendis
            assumenda esse odio, obcaecati consectetur qui ipsum? In?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius minus
            voluptates, blanditiis ipsam sed asperiores quasi perferendis
            assumenda esse odio, obcaecati consectetur qui ipsum? In?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius minus
            voluptates, blanditiis ipsam sed asperiores quasi perferendis
            assumenda esse odio, obcaecati consectetur qui ipsum? In?
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
