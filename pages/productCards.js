const productCards = [
  {
    name: "Гречка",
    link: "https://s41myt.storage.yandex.net/rdisk/401467d2bff72b77ee9e6bb694c56b23374e76906c061b34594ebaf56a8a2eb6/616ef010/0M83RpN93yQAyR6V5bhsDgzQ7ufb8P8XFQDNYjHGSqvlcHxceaH1lBrgvEyZlQ7ssmga47TmnNoGVxZTEu7E2A==?uid=556860284&filename=греча-с-грибами.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=556860284&fsize=6215723&hid=ab89450b59f4f7151ee82050275f9648&media_type=image&tknv=v2&etag=3638412401c8889a05ec608b69ac6d82&rtoken=EbW3lntz6AxJ&force_default=yes&ycrid=na-bb6f4e9a0fffb564ea91845c24f56ff7-downloader23f&ts=5ceb706902400&s=2b44778aaed3a1308dd4f38c5b89b4fa638025f6386c01d856deb6bb8fcccfc5&pb=U2FsdGVkX1_Yu0Aezgt4PIOEcpnRiNyQT0XVBdc_SpQ5Qsh7l0elT8cEhtOuDZdJb_mzIkG-aqS5SN2XsYOKEIiCtKm_tCrDbTyd4B7BkIM",
  },
  {
    name: "Рис",
    link: "https://s254vla.storage.yandex.net/rdisk/bd08a63ad2b8920c5798e0968e61ed8509ea818f661295c141470b9f75a9e133/616ee818/cHUn5KaOgFabyPTq_w4-FLgjjsQiNl4ditftqR_2TwT9ux52F7-laI7Iy-wW_y9g4B_xYeiG7olu9U36LKMPJw==?uid=556860284&filename=рис-с-грибами.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=556860284&fsize=8532300&hid=ac6ca0b1b1cc51de4d817daf924172a5&media_type=image&tknv=v2&etag=af3d5b98f83fa34bfcb6206d197d8bbe&rtoken=TZ96D25LDsU2&force_default=yes&ycrid=na-f126a4b9a0b628556d85799e65a22ed4-downloader15f&ts=5ceb68cf83600&s=89eeef0307237e452f256f7815b0a8d4e8c5ad76b2d63a470f66d08071435f10&pb=U2FsdGVkX1-7YzI5QfomGVCRTTJL4rYaXeHalE7baBTzXY9JqAKzE_FTE_9W4k_Nv6_mwYD6aNg05VMKbc-jH5XZR-ziwNJJsNyZVT9DNkA",
  },
  {
    name: "Рис",
    link: "https://s698sas.storage.yandex.net/rdisk/3e3385ec6005808a4d2fc3d1d7e42e0d578eeb557ea3fa10928c0d19fcc9d8cc/616eef99/cHUn5KaOgFabyPTq_w4-FJKWsR3nDcYYALj70zaRPhc0BbaFIjUuC8ViOlLwZ8P594pPJzcb5ft53KHDAe1uhA==?uid=556860284&filename=_MG_2989.JPG&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=556860284&fsize=1218026&hid=c1b450e3745f7f26c05951749a8dc75d&media_type=image&tknv=v2&etag=16c0e30e1c8eac296749c46c88dfd464&rtoken=kf99qMAckIjn&force_default=yes&ycrid=na-0dc19bf183bc0bc617279e3f46d6bb4f-downloader23f&ts=5ceb6ff785840&s=8d18dff9f8da7f195265ea1ea21f9b96adcab268b8a52073a42875dde1fe2c85&pb=U2FsdGVkX1_ueExlTugzfreTOo_9-HdeoeG7tb6i8A-FFEgvjuxcFaDT2xI4M9rVykQhVTd_v4Xfu5dIYhYAiKMDyt3Hvg2Vl_7kV_Q5z9A",
  },
  {
    name: "Макароны",
    link: "https://s361vla.storage.yandex.net/rdisk/d2b30e6bcdab7ad8104184ad889c89ee4ee3bbe9a6c9bfde023a3b4399c109b6/616eefb1/0M83RpN93yQAyR6V5bhsDokehEpS43NhXLJkfotodkV2w6ZeqMCb_Mq-sUbGpuQdulYF-6j2Z8ThW1N26ykBrw==?uid=556860284&filename=_MG_2993.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=556860284&fsize=10544172&hid=57371bcb8e3050e9628987c2ef0e6a35&media_type=image&tknv=v2&etag=a60bdcce05195a06b9d19ed28418a3e5&rtoken=2zYfhuTfYcUO&force_default=yes&ycrid=na-e0164ef6096b2e12a2724340636c6a41-downloader23f&ts=5ceb700e68e40&s=4258c31e0ff9bb6cbfe1ea0608877dfaf48021c935afaff63c94ceba2b61af07&pb=U2FsdGVkX1_yUvQCvlTWARFC8oGqgo5xftg2EIVy1cG3hOVdv6Eo3nZD5i_CojXsBNp_kIn0a90nLjJe6LmWjO8NEVslN5oDKslDXH8csCs",
  },
  {
    name: "Булгур",
    link: "https://s340vla.storage.yandex.net/rdisk/a4359fc0ef49c4f5f04274e8436d161fc25c557f0deeae0befc5b7bbb06e30d9/616eed9b/cHUn5KaOgFabyPTq_w4-FPzGBnhOCPqtEpJtQ_6fOBSBKxC7BvCE2l1o7nscLS60zA8Vhck4_oZAT3wPCueiLw==?uid=556860284&filename=_MG_2997.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=556860284&fsize=7501653&hid=29689882ae747ffc4d4c566db4366def&media_type=image&tknv=v2&etag=9b6d99c1b2947c44435c181c6867faee&rtoken=h875OZUAc8Gf&force_default=yes&ycrid=na-8f817424851cd0e4beaa2afa7c99ed76-downloader1f&ts=5ceb6e1125cc0&s=f935d465310ada42f31625241c412a04b2691d923bd15728307befafc353f7b1&pb=U2FsdGVkX1-Py6u5tf85Mwx241Z_joTo0bBp3IdfOxS3o1IriM_RhkKD7Wbd6fS0bu_3dU8G7ll-iplvAS7Xt5E5GgFYMP2YIqvN51pT__8",
  },
  {
    name: "Греча-завтрак",
    link: "https://s142vla.storage.yandex.net/rdisk/1b327b74f550a37b98ef88f65f0cbd1ec3ba28f731bd93a80e5e102637f11623/616eefc9/cHUn5KaOgFabyPTq_w4-FO9iIiXbCrvn1XKbIbYJw9KAiB5f_2CtUcUETUnWRyQUAplTgPmVDobxxUMm2dhKyQ==?uid=556860284&filename=_MG_3049.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=556860284&fsize=7101651&hid=1870ce4ba7ea714dc180705f8513352a&media_type=image&tknv=v2&etag=b351e768142791b04602776589f1cee1&rtoken=39JtZmHIUnLL&force_default=yes&ycrid=na-0b31a4458f729ddaf52de9bf8a235ab7-downloader23f&ts=5ceb70254c440&s=73b5a916d0025a2c888d3621b05a3df3931880699a3835d445cdd5a4bdf33e9c&pb=U2FsdGVkX192hs0BdOA2-APav1o391ih4M60IG4F0HWqkvB_DbYw7ahhwwMiiMLYl1_DjfhbMuv6w0Zt2YoWxieD6Wl9GeWdtF2oRvOIMpI",
  },
];
