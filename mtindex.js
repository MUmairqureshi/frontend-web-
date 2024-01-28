import * as React from "react";
import './index.css'
import man1 from './man1.png'
import logo from './logo.png'

export function Mtech(props) {


  const arr = [
    {
      title: 'Lorem Ipsum ',
      img: man1,
      name: 'Josh Homme',
      email: 'joshhome@gmail.com',
      logo1: man1,
      logo2: man1,
      logo3: man1

    },
    {
      title: 'Lorem Ipsum ',
      img: man1,
      name: 'Josh Homme',
      email: 'joshhome@gmail.com',
      logo1: man1,
      logo2: man1,
      logo3: man1

    },
    {
      title: 'Lorem Ipsum ',
      img: man1,
      name: 'Josh Homme',
      email: 'joshhome@gmail.com',
      logo1: man1,
      logo2: man1,
      logo3: man1

    }
    ,
    {
      title: 'Lorem Ipsum ',
      img: man1,
      name: 'Josh Homme',
      email: 'joshhome@gmail.com',
      logo1: man1,
      logo2: man1,
      logo3: man1

    }
    ,
    {
      title: 'Lorem Ipsum ',
      img: man1,
      name: 'Josh Homme',
      email: 'joshhome@gmail.com',
      logo1: man1,
      logo2: man1,
      logo3: man1

    }

  ]
  return (
    <div>
      <div className="div">
        <div className="div-2">
          <div className="column">
            <div className="div-3">
              <div className="div-4">
                <img
                  loading="lazy"
                  src={logo}
                  className="img w- 12  "
                />
                <div className="div-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e39daf95d0b94344e0f7c0100bc28cbe4748c10aca3599e2fc27c839f1defb2?"
                    className="img-2"
                  />
                  <div className="div-6">Home</div>
                </div>
                <div className="div-7">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/47a4f96c7ee691efe58e4bc0c4fbd9fd0579d7651893be611f370c4c9c927465?"
                    className="img-3"
                  />
                  <div className="div-8">Guides</div>
                </div>
                <div className="div-9">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ecced32e6bfefad074a079c2a53c89dc7aa5c73cbe659c279027e7019718a0e1?"
                    className="img-4"
                  />
                  <div className="div-10">Courses</div>
                </div>
              </div>
              <div className="div-11">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/077be78407363e262f0f477230692041fbe8f5884876d4c3509b1b24b0cdcbe9?"
                  className="img-5"
                />
                <div className="div-12">People</div>
              </div>
              <div className="div-13">
                <img
                  loading="lazy"
                  src={man1}
                  className="img-6"
                />
                <div className="div-14">You</div>
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="div-15">
              <div className="div-16">
                <div className="div-17">
                  <div className="div-18">People Directory</div>
                  <div className="div-19">
                    <div className="div-20   bg-gradient-to-r from-orange-400 to-yellow-600">All People</div>
                    <div className="div-21">Lorem Ipsum</div>
                  </div>
                </div>
                <div className="div-22">Lorem Ipsum</div>
                <div className="div-23">Lorem Ipsum</div>
                <div className="div-24">Lorem Ipsum</div>
                <div className="div-25">Lorem Ipsum</div>
                <div className="div-26">Lorem Ipsum</div>
              </div>
              <div className="div-27">
                <div className="div-28">

                  <div className="grid md:grid-cols-3 lg:grid-cols-4  sm:grid-cols-2 xs:grid-cols-2   gap-6 ">

                    {arr?.map((data) => (

                      <div className="border mb-4         hover:outline      shadow-lg      hover:outline-[#c19761] outline-[#9e7540]
                 text-center  rounded-lg p-4  m-auto   ">
                        <div className="shadow   bg-[#fbd3a0]  mb-4     rounded-sm p-2  ">{data.title}</div>
                        <span>
                          <img
                            loading="lazy"
                            src={data.img}
                            className="m-auto "
                          />
                        </span>
                        <div className="div-82">{data.name}</div>
                        <div className="div-83">{data.email}</div>
                        <div className="div-84">
                          <div className="div-85">
                            <img
                              loading="lazy"
                              src={data.logo1}
                              className="img-36"
                            />
                          </div>
                          <div className="div-86">
                            <img
                              loading="lazy"
                              src={data.logo2}
                              className="img-37"
                            />
                          </div>
                          <img
                            loading="lazy"
                            src={data.logo3}
                            className="img-38"
                          />
                        </div>

                      </div>
                    ))}


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
