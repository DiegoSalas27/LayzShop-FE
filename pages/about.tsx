import { FC } from "react";
import Banner from "../components/layout/banner";
import Layout from "../components/layout/main-layout/main-layout";
import PageWithLayoutType from "../components/layout/types/page-with-layout-type";

function About() {
  return (
    <section className="bg-white py-8">
      <Banner title="About LazyShop" />
      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12 px-20">
        <h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            excepturi vitae fugiat velit provident officiis nihil rem quo!
            Assumenda ut quae perferendis ex unde expedita nobis modi ipsam
            totam dolorem?
          </p>
          <p>
            Nihil accusamus eligendi soluta distinctio obcaecati odit
            repudiandae iusto perferendis rem saepe fugiat corrupti
            exercitationem ut hic, facilis velit voluptate unde, quam officia
            molestiae! Repellat odio dolores in reprehenderit? Dolor?
          </p>
          <p>
            Cum, nobis nulla consequuntur architecto debitis itaque deserunt
            exercitationem similique repellendus, inventore quod facere delectus
            perspiciatis, eos suscipit quisquam. In dicta obcaecati laborum ut
            nulla id aut itaque, eligendi esse?
          </p>
          <p>
            Magni autem vitae eveniet rerum magnam voluptatem minus quas
            perferendis veritatis tempore, ipsum officiis praesentium, iure
            molestiae amet vel rem eius velit, odit dolor ducimus molestias!
            Omnis dicta amet quam?
          </p>
        </h1>
        <br/>
        <h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            excepturi vitae fugiat velit provident officiis nihil rem quo!
            Assumenda ut quae perferendis ex unde expedita nobis modi ipsam
            totam dolorem?
          </p>
          <p>
            Nihil accusamus eligendi soluta distinctio obcaecati odit
            repudiandae iusto perferendis rem saepe fugiat corrupti
            exercitationem ut hic, facilis velit voluptate unde, quam officia
            molestiae! Repellat odio dolores in reprehenderit? Dolor?
          </p>
          <p>
            Cum, nobis nulla consequuntur architecto debitis itaque deserunt
            exercitationem similique repellendus, inventore quod facere delectus
            perspiciatis, eos suscipit quisquam. In dicta obcaecati laborum ut
            nulla id aut itaque, eligendi esse?
          </p>
          <p>
            Magni autem vitae eveniet rerum magnam voluptatem minus quas
            perferendis veritatis tempore, ipsum officiis praesentium, iure
            molestiae amet vel rem eius velit, odit dolor ducimus molestias!
            Omnis dicta amet quam?
          </p>
        </h1>
      </div>
    </section>
  );
}

const about: FC = () => <About />;
(about as PageWithLayoutType).layout = Layout;

export default about;
