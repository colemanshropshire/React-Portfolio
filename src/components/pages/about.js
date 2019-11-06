import React from "react";
import aboutImg from "../../../static/assets/images/bio/About_Image.png";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          backgroundImage: `url(${aboutImg})`
        }}
      />

      <div className="right-column">
        <h1>Hi, I am Coleman Shropshire, an aspiring developer.</h1>
        <p style={{ textIndent: "3em" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maxime
          doloribus accusamus odit perferendis, dolorum pariatur modi atque?
          Consectetur omnis soluta voluptatibus placeat, sint earum voluptas
          illum quas ea magni. Ducimus architecto sunt molestias? Odio
          explicabo, quasi enim aperiam harum tempora eius iure, distinctio
          nobis maxime rerum impedit corporis! Maiores deleniti quia aperiam,
          itaque rem consectetur mollitia molestiae iste ipsum. Quasi veritatis
          animi odit, delectus rerum quibusdam ad at perspiciatis mollitia ullam
          est sed velit sequi maxime minima totam consectetur officia,
          recusandae obcaecati vel, quo temporibus deleniti. Eius, dolore
          adipisci? Odio similique voluptate a magnam culpa! Voluptas, nobis.
          Quos sequi ipsam iste ex officia dolor error asperiores cumque eveniet
          eaque optio quas possimus, enim fuga! Impedit ratione magni
          accusantium fugiat? Assumenda placeat animi maiores tempora similique,
          veniam earum. Quasi facilis dolore officiis. Ipsum eaque quae deserunt
          magnam dolorum porro eligendi reiciendis distinctio nostrum iusto nisi
          esse atque libero, debitis nulla. Hic omnis obcaecati repellendus
          molestiae, quisquam iure fugiat earum incidunt placeat et velit ea aut
          illo inventore illum debitis quaerat? Iste, accusantium consequuntur
          mollitia obcaecati laborum inventore sed fugit voluptas? Facere quam
          nisi reiciendis earum ab, aliquid expedita iste odit harum inventore
          quis veritatis praesentium consectetur nihil accusamus. Deleniti
          pariatur est quidem culpa assumenda voluptate rerum explicabo aut
          provident numquam. Temporibus, explicabo cumque consequatur error
          veritatis id excepturi minima, optio a deserunt, magnam mollitia ex
          dolorum. Vel illum voluptas assumenda corporis quas amet voluptatem
          numquam omnis ea? Recusandae, corrupti voluptas!
        </p>
      </div>
    </div>
  );
}
