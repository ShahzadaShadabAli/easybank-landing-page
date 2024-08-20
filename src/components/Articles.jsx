import React from "react";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  return (
    <section id="Blog" className="bg-[#FAFAFA] px-[9%] pt-28 pb-32 max-md:px-16 max-sm:px-4 max-md:pt-16 max-md:pb-16">
      <h1 className="text-5xl sans-semibold mb-7">Latest Articles</h1>

      <div className="grid grid-cols-4 mt-16 max-md:mt-0 max-lg:grid-cols-2 justify-center max-md:grid-cols-1">
        <ArticleCard img={"image-currency"} title={"Recieve money in any currency with no fees"} author={"Claire Robinson"} desc={"The world is getting smaller and we're becoming more mobile. So why should you be force to only receive money in a single..."} />
        <ArticleCard img={"image-restaurant"} title={"Treat yourself without worrying about money"} author={"Wilson Hutton"} desc={"Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"} />
        <ArticleCard img={"image-plane"} title={"Take your Easybank card wherever you go"} author={"Wilson Hutton"} desc={"We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …"} />
        <ArticleCard img={"image-confetti"} title={"Our invite-only Beta accounts are now live!"} author={"Claire Robinson"} desc={"After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."} />
      </div>
    </section>
  );
};

export default Articles;
