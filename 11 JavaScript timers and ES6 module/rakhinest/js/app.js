const IMAGES = {
 "logo": "https://lh3.googleusercontent.com/aida/AEtjO1XPkQy8D8WHPxHfjlzBtKbFs2X3C6f3hifvobsuR8OVmcRe_28TusOTzf5MVQSWUoG9M_LUNat_mqOZKLTdN-VXazrlb2UvUS5l-6HdjjFkd2tQbGNEPeIuKStgLgRSFVnxYHPDsSwrSsleLbXB98UhE1bT3mfU0_Uw-l5105DlTQrNcq0A8h8_hwzSVN-jTn2Y7e2NOtQg3bjwJxCU_BcqT95i7Lpi4-fZA8Ip087N",
 "hero": "https://lh3.googleusercontent.com/aida-public/AB6AXuCDM8mWs010hay5BOjtY_5LC6qvwaDO8DQymYAC_BS0482eX5lsC21BFGyDKTpIYvv7Z1bhMAauohfwM5JfTgJwcKwp7IkGCy4pA9QQpTwD77mz4rUsUXhNf_ZocEkkW8UZf4joZxVhB4gCNOPdfFzAkVBQHHm-1goz6TOmRrvqgOkenE62zK4rmpIcIZL03lkxkWx7Ak21utwq8Fgku7_6XazSNI827ADilSB-c74",
 "chandrika": "https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0",
 "grand": "https://lh3.googleusercontent.com/aida-public/AB6AXuAjlOBSEAeYLLGMt50lFj8TbX8sieQWxIIi55aNKX8vPHb_VGrdgCm_tbYULfWQEk19CPIEkSQDekOK2ggMH8wijOS5wCRFcR-X1YjCDjgEpm-ZwpAf0y_cjPaBCUSA0y6flyQDlxZJX4vhKHQ3qyZZzMMgYTOUWTHk_TfECxctyFewNLwVXHyhtgP9iVUyUyzJweKpBFmj9UbHOFpKAiL610HJq0ULxIaV1tG2iCI"
};
const CATEGORIES = [
 {
  "slug": "silver",
  "name": "Silver Rakhis",
  "tagline": "Hallmarked 925 sterling silver",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kpyv1bZA6YVooLi66n_LmYmEOSu11aaUgs45wrfgoF8Vsz8ijMVj98yJXbw9vOd3xqg3b1913jrSX2j4ApqI39hn70dZsadxN5iPhKHcMto0rE22cSlZLx8eJ0ViyKnbBcft004TMZBR69Jwx9PP-7za7DQoffCJ130jljHiLsPAxJCB8IuO8mVLycxnTpGojIk5m2MIJJCxoUmQFAVAMw0eX3nc8odLdmYUmI"
 },
 {
  "slug": "designer",
  "name": "Designer Rakhis",
  "tagline": "Zari, kundan and meenakari",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8Ds2Vi0AjBIf4EO2k6xawd5bFhFWSENLeINRPXuylexs2YdupuyeOvKmWS0SIYMgCCkv4K0gtwf5jD0jZP9gQZuN66G3tK7lXYLqECGphZCz53t__0kWntLNR90Q6WwkHzjUu5H-GWKYa3_97Y3TZrJktK6atk-jTNC9qRp1j-m9IsrijdunSHFHpJNFvOFeYdJsxcWWGfq_ncn6jYGokFrSvn2cHkVjCKrhQrU"
 },
 {
  "slug": "bhabhi",
  "name": "Bhaiya Bhabhi",
  "tagline": "Matching rakhi and lumba sets",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuACjKjn5NuKdRxYN1azJNd5lUbSBUgt3oZgz0LnCutr6kwfQaijsyeWzXIsv9QkntEd4t2KkkOU4Und7A_OzTUiytrvSaLV-WFgX1t9j_FxKHrA_JdVFd-CVCgz-qf7hKK8m3ydSyNIBIiEeOTnBXA98bzDAbw8ZlhHN_YpzlSiUQwVmgDmIm15-b1sUn-u-TfFOStW72bb8_NzGCNId88IDWWk8M1IUvkbcYmJI6Q"
 },
 {
  "slug": "kids",
  "name": "Kids Rakhis",
  "tagline": "Child-safe, playful designs",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuCXy2keGLQIX5oOrEnphOH-lX-DSuTR74NTJE6ZeLTKpGuN5v6n_uuP3l1dDBv_LVG9ictSnrjx5iLYYOu258I2926mdHfsVBHDEyxa5mJJblxOhx8a_znWwIV4zixoyisHo3zQwFOFfbpCorTjmnihJEs4IHg-5EwbMkRluScXm2Jp-4ygamTyx5eNf7ohkNNdEca8kD_7uQLuQShINB3B8g7Ue6_bDiBTddJXTUU"
 },
 {
  "slug": "evil-eye",
  "name": "Evil Eye",
  "tagline": "Protective nazar charms",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuA4sYtVkIjbaZ5idaSsjarRCsaJNgASLuRM9s1o_W_ZnbiYDtfkU6CFo6njhMbHkJbt-cy0L9HCuxfgsKaYWrVpNPDQn6Ih7MJlwRg4gn9Pz4lc07Mgu_mlJhU6Ai1r6QcINYrzNd_dcN42-nJewnogYcQQM4v6crygAZAfemIqyyVrN_0En2gP8KoDzLYZ0gltiM53han9siq41eX49nyvlKgMRGV17qj4vDCE14g"
 },
 {
  "slug": "hampers",
  "name": "Gift Hampers",
  "tagline": "Sweets, dry fruits and keepsakes",
  "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuAjlOBSEAeYLLGMt50lFj8TbX8sieQWxIIi55aNKX8vPHb_VGrdgCm_tbYULfWQEk19CPIEkSQDekOK2ggMH8wijOS5wCRFcR-X1YjCDjgEpm-ZwpAf0y_cjPaBCUSA0y6flyQDlxZJX4vhKHQ3qyZZzMMgYTOUWTHk_TfECxctyFewNLwVXHyhtgP9iVUyUyzJweKpBFmj9UbHOFpKAiL610HJq0ULxIaV1tG2iCI"
 }
];
const PRODUCTS = [
 {
  "id": 1,
  "slug": "royal-rudraksha-silver",
  "name": "Royal Rudraksha Silver Rakhi",
  "category": "silver",
  "short": "Handcrafted silver and sacred rudraksha rakhi on a hand-twisted silk thread.",
  "description": "Crafted by master artisans, this rakhi pairs hand-finished sterling silver with genuine rudraksha beads. It arrives in a keepsake gift box with roli, chawal and a handwritten greeting card.",
  "price": 1899,
  "mrp": 2499,
  "rating": 4.9,
  "reviews": 128,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCDM8mWs010hay5BOjtY_5LC6qvwaDO8DQymYAC_BS0482eX5lsC21BFGyDKTpIYvv7Z1bhMAauohfwM5JfTgJwcKwp7IkGCy4pA9QQpTwD77mz4rUsUXhNf_ZocEkkW8UZf4joZxVhB4gCNOPdfFzAkVBQHHm-1goz6TOmRrvqgOkenE62zK4rmpIcIZL03lkxkWx7Ak21utwq8Fgku7_6XazSNI827ADilSB-c74",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuD5LhAIx2gClGmL8AUZxC9l8iNcOOe_MoIBF89o8GV4oOtTZ02KXP0vx6pWrOE_zsCxeefpkrDtPnUbiracw2uR-IGSWIxVbfWLgyK1TLBYAc8tpNkMv5O2grzBea-tJJHwN6YUu_jogpcGdPXD3_7vRqXwihNbVfT5XAw28a900pWF2Gwu3dpttB8WHLIzgWyXBIsj0Cvz5ZzpVSd6Owsmr2yoxQqVE8HXUO2b0xU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kpyv1bZA6YVooLi66n_LmYmEOSu11aaUgs45wrfgoF8Vsz8ijMVj98yJXbw9vOd3xqg3b1913jrSX2j4ApqI39hn70dZsadxN5iPhKHcMto0rE22cSlZLx8eJ0ViyKnbBcft004TMZBR69Jwx9PP-7za7DQoffCJ130jljHiLsPAxJCB8IuO8mVLycxnTpGojIk5m2MIJJCxoUmQFAVAMw0eX3nc8odLdmYUmI"
  ],
  "badge": "Bestseller"
 },
 {
  "id": 2,
  "slug": "zari-silk-rakhi",
  "name": "Golden Zari Silk Rakhi",
  "category": "designer",
  "short": "Traditional silk rakhi woven with golden zari resham.",
  "description": "Woven with real zari thread on soft Banarasi-style silk, this rakhi is a timeless choice for the traditional brother. Includes roli, chawal and mishri.",
  "price": 649,
  "mrp": 899,
  "rating": 4.7,
  "reviews": 214,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8Ds2Vi0AjBIf4EO2k6xawd5bFhFWSENLeINRPXuylexs2YdupuyeOvKmWS0SIYMgCCkv4K0gtwf5jD0jZP9gQZuN66G3tK7lXYLqECGphZCz53t__0kWntLNR90Q6WwkHzjUu5H-GWKYa3_97Y3TZrJktK6atk-jTNC9qRp1j-m9IsrijdunSHFHpJNFvOFeYdJsxcWWGfq_ncn6jYGokFrSvn2cHkVjCKrhQrU"
  ],
  "badge": "Bestseller"
 },
 {
  "id": 3,
  "slug": "pearl-925-silver",
  "name": "Freshwater Pearl 925 Silver Rakhi",
  "category": "silver",
  "short": "Opulent 925 sterling silver rakhi set with freshwater pearls.",
  "description": "Hallmarked 925 sterling silver centrepiece with lustrous freshwater pearls. The rakhi can be worn later as a bracelet.",
  "price": 2299,
  "mrp": 2999,
  "rating": 4.8,
  "reviews": 96,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuD5LhAIx2gClGmL8AUZxC9l8iNcOOe_MoIBF89o8GV4oOtTZ02KXP0vx6pWrOE_zsCxeefpkrDtPnUbiracw2uR-IGSWIxVbfWLgyK1TLBYAc8tpNkMv5O2grzBea-tJJHwN6YUu_jogpcGdPXD3_7vRqXwihNbVfT5XAw28a900pWF2Gwu3dpttB8WHLIzgWyXBIsj0Cvz5ZzpVSd6Owsmr2yoxQqVE8HXUO2b0xU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kpyv1bZA6YVooLi66n_LmYmEOSu11aaUgs45wrfgoF8Vsz8ijMVj98yJXbw9vOd3xqg3b1913jrSX2j4ApqI39hn70dZsadxN5iPhKHcMto0rE22cSlZLx8eJ0ViyKnbBcft004TMZBR69Jwx9PP-7za7DQoffCJ130jljHiLsPAxJCB8IuO8mVLycxnTpGojIk5m2MIJJCxoUmQFAVAMw0eX3nc8odLdmYUmI",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBmVzdTA2_LmvbMqmpPIcKGd4UYUD-EHxw5vdUIHhao2SzE0QLu9vNJlWiP90OWoNh3UxfDZYCPoS-Fy9L9p7kb6LZjENjDy-pOei9KC-gT37tko44WJcLbJbpobvabik9_UaeUmiXn3yvIpnwykGXgbmkKik6nf11y-ip9teJxLZYetZA3PQhVE6TB8Du-fQ2wcpPk0vwjyVSzkekZ6ufqY3kvhkQLn_zm4hFNO5Y"
  ],
  "badge": "New"
 },
 {
  "id": 4,
  "slug": "royal-bhaiya-bhabhi-set",
  "name": "Royal Bhaiya Bhabhi Rakhi Set",
  "category": "bhabhi",
  "short": "Matching rakhi and hanging lumba for brother and sister-in-law.",
  "description": "A coordinated pair in deep maroon and gold with beadwork and tassels. Comes in a two-compartment gift box.",
  "price": 999,
  "mrp": 1399,
  "rating": 4.8,
  "reviews": 173,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6NI-eUdzEevTeQmFTJIyuFugJ9FbSS2LC8D5mRXUIyfIuMEIlkBeN2dMTEyrFGq5ntFCKsk5lTw5jBpBNl4S-1z-mHMrpYiLxehU_t9R8G1X5JoPyJP_t6NGeA7dyerH-AEQBTglRfQ0X46eCc5gPk97A7CfC2dH-za-SvlVNvorDHCKoxdWN51vBN3MUiwoYQtmYJqDKVP7Y9YsK0aqmv7OiFn7T7aNuCjpBSU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCvdK2xemCuP3FyXxkTLtlzTzDpOF3Nt22BtAyxeeG4rRldQZ5nf-2TqK6fd-21bIxPHhfBcpjdCLEE91CfYTQfgHOkE45panibFSW2b2UOOw0ctYN4M8YGezzZTahuyHNl9Gxz_HZiOaes_2EIynCRVwwTHujX6ErBb-Xt0J8ktntzS6FAMKS7yRloc_MmmkqBZySTTg_FidA1CtcOctxzrC0CEMVi0AGY3Pi_mn4",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuACjKjn5NuKdRxYN1azJNd5lUbSBUgt3oZgz0LnCutr6kwfQaijsyeWzXIsv9QkntEd4t2KkkOU4Und7A_OzTUiytrvSaLV-WFgX1t9j_FxKHrA_JdVFd-CVCgz-qf7hKK8m3ydSyNIBIiEeOTnBXA98bzDAbw8ZlhHN_YpzlSiUQwVmgDmIm15-b1sUn-u-TfFOStW72bb8_NzGCNId88IDWWk8M1IUvkbcYmJI6Q"
  ],
  "badge": "Bestseller"
 },
 {
  "id": 5,
  "slug": "cartoon-kids-rakhi",
  "name": "Playful Cartoon Kids Rakhi",
  "category": "kids",
  "short": "Bright, child-safe rakhi with a friendly character motif.",
  "description": "Soft enamel finish with rounded edges and a stretchable thread that is gentle on small wrists.",
  "price": 349,
  "mrp": 499,
  "rating": 4.6,
  "reviews": 89,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBMRPx4Aa8o0MT-Cuo90DLOEPh7LEde6IzVuGRZ2jijy0IXr-LA_6XpfA5I3AQ8kw-ihvLbyKwiewyjj-Bxgq0WbF73ZWsNMbErxupZ6_N7CCTmq5OwGWSFrqfdqqAuISwGH2VkA0cV6h78LBL70rDirYh8L_0T_Fmv7m_Un8dCAvAY7FzamqHI2B5xLR4Br_3viGTGfX9IJZWPLnPkg1Sey7yUgrJy-L7skebuY-s",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCXy2keGLQIX5oOrEnphOH-lX-DSuTR74NTJE6ZeLTKpGuN5v6n_uuP3l1dDBv_LVG9ictSnrjx5iLYYOu258I2926mdHfsVBHDEyxa5mJJblxOhx8a_znWwIV4zixoyisHo3zQwFOFfbpCorTjmnihJEs4IHg-5EwbMkRluScXm2Jp-4ygamTyx5eNf7ohkNNdEca8kD_7uQLuQShINB3B8g7Ue6_bDiBTddJXTUU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0"
  ],
  "badge": ""
 },
 {
  "id": 6,
  "slug": "cobalt-evil-eye-rakhi",
  "name": "Cobalt Evil Eye Rakhi",
  "category": "evil-eye",
  "short": "Turkish evil eye amulet rakhi embedded in fine gold beadwork.",
  "description": "A protective cobalt-blue nazar amulet set in gold-tone beadwork, a popular pick for younger brothers.",
  "price": 549,
  "mrp": 749,
  "rating": 4.7,
  "reviews": 142,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuA4sYtVkIjbaZ5idaSsjarRCsaJNgASLuRM9s1o_W_ZnbiYDtfkU6CFo6njhMbHkJbt-cy0L9HCuxfgsKaYWrVpNPDQn6Ih7MJlwRg4gn9Pz4lc07Mgu_mlJhU6Ai1r6QcINYrzNd_dcN42-nJewnogYcQQM4v6crygAZAfemIqyyVrN_0En2gP8KoDzLYZ0gltiM53han9siq41eX49nyvlKgMRGV17qj4vDCE14g",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAcXgOtq1o5obV9a5_Zr-q4lG4JzItrR4cgInFAzNfHzbCJfiEbgMR_ggNg7_-zaMdnMAjOziuga-nk_DXsWUN5s_YGTengxlJhNAinA_1i3J6Ykxpk1_fSYYCbrAKpYOcr2bBtaVaX-jEKzl6Ew5dzfKO5gWHJobwE9GjPejjM6dHJQJRBkJIL5b7KZSzPJsy0E_DqOZ9iprg_ctkCOIiTQsUNAWoS5cejp23t_lA",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0"
  ],
  "badge": ""
 },
 {
  "id": 7,
  "slug": "gourmet-kaju-katli-hamper",
  "name": "Gourmet Kaju Katli Hamper",
  "category": "hampers",
  "short": "Artisanal kaju katli, dry fruits and a designer rakhi in a festive box.",
  "description": "Includes 250 g kaju katli, roasted almonds, a designer rakhi, roli chawal and a greeting card, packed in a hand-finished box.",
  "price": 1599,
  "mrp": 1999,
  "rating": 4.9,
  "reviews": 77,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuClld473OTQcygRDv_8OB8dns-5v8lQC9fBBxZO8LOKz6ZpFoYsjnb_o19CTLDO-CsozV7DARzNuEGOMlif7D9PVOzRkjHJeWsadcyZDqWYMGOLPMVPY3fx7ZscuWCfoAGuz52TyTmRwOEAeDOLWZ40yM8XzVItf4_qhLAdklKHuyEPZqK4Zqp3pRYQ5raoa6n7nA64oDKuEuPW2I4BZQGzUxLPxiZxI1Zlbo6mkJY",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAjlOBSEAeYLLGMt50lFj8TbX8sieQWxIIi55aNKX8vPHb_VGrdgCm_tbYULfWQEk19CPIEkSQDekOK2ggMH8wijOS5wCRFcR-X1YjCDjgEpm-ZwpAf0y_cjPaBCUSA0y6flyQDlxZJX4vhKHQ3qyZZzMMgYTOUWTHk_TfECxctyFewNLwVXHyhtgP9iVUyUyzJweKpBFmj9UbHOFpKAiL610HJq0ULxIaV1tG2iCI",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0"
  ],
  "badge": "Gift Favourite"
 },
 {
  "id": 8,
  "slug": "chandrika-pearl-zari",
  "name": "Chandrika Pearl and Zari Rakhi",
  "category": "designer",
  "short": "Royal chandrika pearl rakhi with golden zari detailing.",
  "description": "A flatlay favourite: a chandrika motif of seed pearls bordered in zari, on a double-strand silk thread.",
  "price": 799,
  "mrp": 1099,
  "rating": 4.7,
  "reviews": 118,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8Ds2Vi0AjBIf4EO2k6xawd5bFhFWSENLeINRPXuylexs2YdupuyeOvKmWS0SIYMgCCkv4K0gtwf5jD0jZP9gQZuN66G3tK7lXYLqECGphZCz53t__0kWntLNR90Q6WwkHzjUu5H-GWKYa3_97Y3TZrJktK6atk-jTNC9qRp1j-m9IsrijdunSHFHpJNFvOFeYdJsxcWWGfq_ncn6jYGokFrSvn2cHkVjCKrhQrU"
  ],
  "badge": ""
 },
 {
  "id": 9,
  "slug": "sudarshan-chakra-silver",
  "name": "Sudarshan Chakra Silver Rakhi",
  "category": "silver",
  "short": "Pure 925 silver rakhi with an intricately engraved Sudarshan Chakra.",
  "description": "Symbolising protection, the Sudarshan Chakra is engraved by hand on pure 925 silver and fitted on a red mauli thread.",
  "price": 1799,
  "mrp": 2299,
  "rating": 4.9,
  "reviews": 64,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBmVzdTA2_LmvbMqmpPIcKGd4UYUD-EHxw5vdUIHhao2SzE0QLu9vNJlWiP90OWoNh3UxfDZYCPoS-Fy9L9p7kb6LZjENjDy-pOei9KC-gT37tko44WJcLbJbpobvabik9_UaeUmiXn3yvIpnwykGXgbmkKik6nf11y-ip9teJxLZYetZA3PQhVE6TB8Du-fQ2wcpPk0vwjyVSzkekZ6ufqY3kvhkQLn_zm4hFNO5Y",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuD5LhAIx2gClGmL8AUZxC9l8iNcOOe_MoIBF89o8GV4oOtTZ02KXP0vx6pWrOE_zsCxeefpkrDtPnUbiracw2uR-IGSWIxVbfWLgyK1TLBYAc8tpNkMv5O2grzBea-tJJHwN6YUu_jogpcGdPXD3_7vRqXwihNbVfT5XAw28a900pWF2Gwu3dpttB8WHLIzgWyXBIsj0Cvz5ZzpVSd6Owsmr2yoxQqVE8HXUO2b0xU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kpyv1bZA6YVooLi66n_LmYmEOSu11aaUgs45wrfgoF8Vsz8ijMVj98yJXbw9vOd3xqg3b1913jrSX2j4ApqI39hn70dZsadxN5iPhKHcMto0rE22cSlZLx8eJ0ViyKnbBcft004TMZBR69Jwx9PP-7za7DQoffCJ130jljHiLsPAxJCB8IuO8mVLycxnTpGojIk5m2MIJJCxoUmQFAVAMw0eX3nc8odLdmYUmI"
  ],
  "badge": "New"
 },
 {
  "id": 10,
  "slug": "gulab-kangan-lumba-pair",
  "name": "Gulab Kangan Lumba Pair",
  "category": "bhabhi",
  "short": "Rose-gold metal rakhi and lumba pair with rose motifs.",
  "description": "A delicate rose-gold pair with enamel roses. The lumba is designed as a bangle charm for the bhabhi.",
  "price": 899,
  "mrp": 1199,
  "rating": 4.6,
  "reviews": 101,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCvdK2xemCuP3FyXxkTLtlzTzDpOF3Nt22BtAyxeeG4rRldQZ5nf-2TqK6fd-21bIxPHhfBcpjdCLEE91CfYTQfgHOkE45panibFSW2b2UOOw0ctYN4M8YGezzZTahuyHNl9Gxz_HZiOaes_2EIynCRVwwTHujX6ErBb-Xt0J8ktntzS6FAMKS7yRloc_MmmkqBZySTTg_FidA1CtcOctxzrC0CEMVi0AGY3Pi_mn4",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6NI-eUdzEevTeQmFTJIyuFugJ9FbSS2LC8D5mRXUIyfIuMEIlkBeN2dMTEyrFGq5ntFCKsk5lTw5jBpBNl4S-1z-mHMrpYiLxehU_t9R8G1X5JoPyJP_t6NGeA7dyerH-AEQBTglRfQ0X46eCc5gPk97A7CfC2dH-za-SvlVNvorDHCKoxdWN51vBN3MUiwoYQtmYJqDKVP7Y9YsK0aqmv7OiFn7T7aNuCjpBSU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuACjKjn5NuKdRxYN1azJNd5lUbSBUgt3oZgz0LnCutr6kwfQaijsyeWzXIsv9QkntEd4t2KkkOU4Und7A_OzTUiytrvSaLV-WFgX1t9j_FxKHrA_JdVFd-CVCgz-qf7hKK8m3ydSyNIBIiEeOTnBXA98bzDAbw8ZlhHN_YpzlSiUQwVmgDmIm15-b1sUn-u-TfFOStW72bb8_NzGCNId88IDWWk8M1IUvkbcYmJI6Q"
  ],
  "badge": ""
 },
 {
  "id": 11,
  "slug": "nazar-battu-sapphire",
  "name": "Nazar Battu Sapphire Rakhi",
  "category": "evil-eye",
  "short": "Evil eye protective rakhi with sapphire-blue glass beads.",
  "description": "Fine sapphire glass beads frame a nazar battu charm. Light enough for everyday wear well after the festival.",
  "price": 599,
  "mrp": 799,
  "rating": 4.5,
  "reviews": 73,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAcXgOtq1o5obV9a5_Zr-q4lG4JzItrR4cgInFAzNfHzbCJfiEbgMR_ggNg7_-zaMdnMAjOziuga-nk_DXsWUN5s_YGTengxlJhNAinA_1i3J6Ykxpk1_fSYYCbrAKpYOcr2bBtaVaX-jEKzl6Ew5dzfKO5gWHJobwE9GjPejjM6dHJQJRBkJIL5b7KZSzPJsy0E_DqOZ9iprg_ctkCOIiTQsUNAWoS5cejp23t_lA",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuA4sYtVkIjbaZ5idaSsjarRCsaJNgASLuRM9s1o_W_ZnbiYDtfkU6CFo6njhMbHkJbt-cy0L9HCuxfgsKaYWrVpNPDQn6Ih7MJlwRg4gn9Pz4lc07Mgu_mlJhU6Ai1r6QcINYrzNd_dcN42-nJewnogYcQQM4v6crygAZAfemIqyyVrN_0En2gP8KoDzLYZ0gltiM53han9siq41eX49nyvlKgMRGV17qj4vDCE14g",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0"
  ],
  "badge": ""
 },
 {
  "id": 12,
  "slug": "grand-festive-hamper",
  "name": "Grand Festive Keepsake Hamper",
  "category": "hampers",
  "short": "Luxury hamper with velvet keepsake chest, sweets and two rakhis.",
  "description": "Our grandest gift: a velvet keepsake chest with two designer rakhis, assorted mithai, dry fruits, a scented candle and a personalised card.",
  "price": 2999,
  "mrp": 3799,
  "rating": 4.9,
  "reviews": 52,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAjlOBSEAeYLLGMt50lFj8TbX8sieQWxIIi55aNKX8vPHb_VGrdgCm_tbYULfWQEk19CPIEkSQDekOK2ggMH8wijOS5wCRFcR-X1YjCDjgEpm-ZwpAf0y_cjPaBCUSA0y6flyQDlxZJX4vhKHQ3qyZZzMMgYTOUWTHk_TfECxctyFewNLwVXHyhtgP9iVUyUyzJweKpBFmj9UbHOFpKAiL610HJq0ULxIaV1tG2iCI",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuClld473OTQcygRDv_8OB8dns-5v8lQC9fBBxZO8LOKz6ZpFoYsjnb_o19CTLDO-CsozV7DARzNuEGOMlif7D9PVOzRkjHJeWsadcyZDqWYMGOLPMVPY3fx7ZscuWCfoAGuz52TyTmRwOEAeDOLWZ40yM8XzVItf4_qhLAdklKHuyEPZqK4Zqp3pRYQ5raoa6n7nA64oDKuEuPW2I4BZQGzUxLPxiZxI1Zlbo6mkJY",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0"
  ],
  "badge": "Premium"
 },
 {
  "id": 13,
  "slug": "meenakari-peacock",
  "name": "Meenakari Peacock Rakhi",
  "category": "designer",
  "short": "Royal meenakari peacock rakhi in vibrant turquoise.",
  "description": "Hand-painted meenakari enamel peacock set in a gold-plated frame, finished with beaded tassels.",
  "price": 899,
  "mrp": 1199,
  "rating": 4.8,
  "reviews": 135,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCA8Ds2Vi0AjBIf4EO2k6xawd5bFhFWSENLeINRPXuylexs2YdupuyeOvKmWS0SIYMgCCkv4K0gtwf5jD0jZP9gQZuN66G3tK7lXYLqECGphZCz53t__0kWntLNR90Q6WwkHzjUu5H-GWKYa3_97Y3TZrJktK6atk-jTNC9qRp1j-m9IsrijdunSHFHpJNFvOFeYdJsxcWWGfq_ncn6jYGokFrSvn2cHkVjCKrhQrU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0"
  ],
  "badge": ""
 },
 {
  "id": 14,
  "slug": "om-silver-talisman",
  "name": "Om Silver Talisman Rakhi",
  "category": "silver",
  "short": "Authentic 925 silver Om talisman flanked by silver beads.",
  "description": "An Om engraved centrepiece in 925 silver, flanked by oxidised silver beads on a fine thread.",
  "price": 1399,
  "mrp": 1799,
  "rating": 4.8,
  "reviews": 88,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAU0kpyv1bZA6YVooLi66n_LmYmEOSu11aaUgs45wrfgoF8Vsz8ijMVj98yJXbw9vOd3xqg3b1913jrSX2j4ApqI39hn70dZsadxN5iPhKHcMto0rE22cSlZLx8eJ0ViyKnbBcft004TMZBR69Jwx9PP-7za7DQoffCJ130jljHiLsPAxJCB8IuO8mVLycxnTpGojIk5m2MIJJCxoUmQFAVAMw0eX3nc8odLdmYUmI",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuD5LhAIx2gClGmL8AUZxC9l8iNcOOe_MoIBF89o8GV4oOtTZ02KXP0vx6pWrOE_zsCxeefpkrDtPnUbiracw2uR-IGSWIxVbfWLgyK1TLBYAc8tpNkMv5O2grzBea-tJJHwN6YUu_jogpcGdPXD3_7vRqXwihNbVfT5XAw28a900pWF2Gwu3dpttB8WHLIzgWyXBIsj0Cvz5ZzpVSd6Owsmr2yoxQqVE8HXUO2b0xU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBmVzdTA2_LmvbMqmpPIcKGd4UYUD-EHxw5vdUIHhao2SzE0QLu9vNJlWiP90OWoNh3UxfDZYCPoS-Fy9L9p7kb6LZjENjDy-pOei9KC-gT37tko44WJcLbJbpobvabik9_UaeUmiXn3yvIpnwykGXgbmkKik6nf11y-ip9teJxLZYetZA3PQhVE6TB8Du-fQ2wcpPk0vwjyVSzkekZ6ufqY3kvhkQLn_zm4hFNO5Y"
  ],
  "badge": ""
 },
 {
  "id": 15,
  "slug": "emerald-velvet-lumba-set",
  "name": "Emerald Velvet Bhaiya Bhabhi Set",
  "category": "bhabhi",
  "short": "Deep emerald velvet lumba set with gold zardozi accents.",
  "description": "A luxe set with velvet-wrapped lumba and a matching rakhi, accented with gold zardozi work.",
  "price": 1199,
  "mrp": 1599,
  "rating": 4.7,
  "reviews": 69,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuACjKjn5NuKdRxYN1azJNd5lUbSBUgt3oZgz0LnCutr6kwfQaijsyeWzXIsv9QkntEd4t2KkkOU4Und7A_OzTUiytrvSaLV-WFgX1t9j_FxKHrA_JdVFd-CVCgz-qf7hKK8m3ydSyNIBIiEeOTnBXA98bzDAbw8ZlhHN_YpzlSiUQwVmgDmIm15-b1sUn-u-TfFOStW72bb8_NzGCNId88IDWWk8M1IUvkbcYmJI6Q",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBG6NI-eUdzEevTeQmFTJIyuFugJ9FbSS2LC8D5mRXUIyfIuMEIlkBeN2dMTEyrFGq5ntFCKsk5lTw5jBpBNl4S-1z-mHMrpYiLxehU_t9R8G1X5JoPyJP_t6NGeA7dyerH-AEQBTglRfQ0X46eCc5gPk97A7CfC2dH-za-SvlVNvorDHCKoxdWN51vBN3MUiwoYQtmYJqDKVP7Y9YsK0aqmv7OiFn7T7aNuCjpBSU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCvdK2xemCuP3FyXxkTLtlzTzDpOF3Nt22BtAyxeeG4rRldQZ5nf-2TqK6fd-21bIxPHhfBcpjdCLEE91CfYTQfgHOkE45panibFSW2b2UOOw0ctYN4M8YGezzZTahuyHNl9Gxz_HZiOaes_2EIynCRVwwTHujX6ErBb-Xt0J8ktntzS6FAMKS7yRloc_MmmkqBZySTTg_FidA1CtcOctxzrC0CEMVi0AGY3Pi_mn4"
  ],
  "badge": ""
 },
 {
  "id": 16,
  "slug": "bal-ganesha-kids",
  "name": "Bal Ganesha Kids Rakhi",
  "category": "kids",
  "short": "Smooth, rounded Bal Ganesha rakhi with child-safe soft enamel.",
  "description": "A friendly Bal Ganesha in soft enamel with rounded edges and no sharp points, safe for little hands.",
  "price": 399,
  "mrp": 549,
  "rating": 4.8,
  "reviews": 156,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuCXy2keGLQIX5oOrEnphOH-lX-DSuTR74NTJE6ZeLTKpGuN5v6n_uuP3l1dDBv_LVG9ictSnrjx5iLYYOu258I2926mdHfsVBHDEyxa5mJJblxOhx8a_znWwIV4zixoyisHo3zQwFOFfbpCorTjmnihJEs4IHg-5EwbMkRluScXm2Jp-4ygamTyx5eNf7ohkNNdEca8kD_7uQLuQShINB3B8g7Ue6_bDiBTddJXTUU",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuBMRPx4Aa8o0MT-Cuo90DLOEPh7LEde6IzVuGRZ2jijy0IXr-LA_6XpfA5I3AQ8kw-ihvLbyKwiewyjj-Bxgq0WbF73ZWsNMbErxupZ6_N7CCTmq5OwGWSFrqfdqqAuISwGH2VkA0cV6h78LBL70rDirYh8L_0T_Fmv7m_Un8dCAvAY7FzamqHI2B5xLR4Br_3viGTGfX9IJZWPLnPkg1Sey7yUgrJy-L7skebuY-s",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0"
  ],
  "badge": "Bestseller"
 },
 {
  "id": 17,
  "slug": "kundan-floral-rakhi",
  "name": "Kundan Floral Centrepiece Rakhi",
  "category": "designer",
  "short": "Kundan floral rakhi with hand-set polki-style stones.",
  "description": "A floral centrepiece of hand-set polki-style stones in a gold-tone setting with pearl drops.",
  "price": 749,
  "mrp": 999,
  "rating": 4.6,
  "reviews": 92,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDsgMlF_IN-CYAbIMnOIyZI39HJQS23lKEBZf6mk0cgrMJkmSYLkmlR3X9WjaVGwg2QpHcdVmAwn-rgBxqEdNEZg2tnFD_w06Vqhf959y4sY2XFcA9z8mSeUJy5uJIneGfo57CB3f6JGSMDYgSO9noUJdVacRD9N34iNCytbGjCxZAU8vII0ZYJrRYp6HsYRo1Nbb2-mrA83PzBVXJgPfkfbCK8lNhy5G3AkAgnzfg",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0"
  ],
  "badge": ""
 },
 {
  "id": 18,
  "slug": "zardozi-gold-rakhi",
  "name": "Regal Zardozi Gold Rakhi",
  "category": "designer",
  "short": "Regal zardozi embroidered rakhi in authentic gold bullion wire.",
  "description": "Zardozi embroidery in gold bullion wire on deep burgundy silk, for a regal festive look.",
  "price": 1099,
  "mrp": 1499,
  "rating": 4.7,
  "reviews": 61,
  "images": [
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDUasfvg9GZNnS7JbGLiAvFM4V_q4Q49LYF0bmYmBXCXB4q_UFQyxFkENOKlJyz3vQlxZzBilBoJPB5moj__571b_ble4BLCHpuUE1p3i3V_RgRUWZ8FN7wq4nvTEbd6Pecq4VAAwDhVI2bQh2SXY1PqBp5AO6mpLOYJrt-TkNXMEgyrhp1fiFr62yiTVtn9QlLDj8ls32BYfZXhJV6JT-fo98x9QfWsYOQfn9sGwg",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuAYUxpS8LTJz4RBmIeLmV9lGQ2YHCGE_l1oIdBpX31S5kTvi5mE5UOKgKKYN85QITpXtUNboTranGmVEZ72oTedYPjlEVc3PDzsznsVu67D51KYlpJQgvdENM8DmFdtcENvnp2VlxZa7t3NirIOGyTiPdKAGGmi_k77MvQPB_vr3XY1psRB75o-NXkiymKUMsYa-he6TrHxw0plRpLHSKaz-904ggbS6UHlficsNL0",
   "https://lh3.googleusercontent.com/aida-public/AB6AXuDtDzZuJ_fRVUpHgbFNhuWSnr9v41eZXiCaVSSZkRqiPM7GbilzbhXPYZphwAT2ZLQ-p67fosa5XeD-XjmRVAG1IpUMQtNLA-EpGBs-7wzpkWJzKuoWJyJJk0J0PT7xlTqYOL9Dxf4NtjjoY-NkPosUgfCWfQyjb9NXaB_BuoJRa3Um9jOFi10uKctuRW-JzyrS69mX2OUChL48-rafnpZrBUnFdzgErGA_id49Vy0"
  ],
  "badge": ""
 }
];
const Store = (() => {
  const listeners = [];
  const mem = {};
  const read = (key, fallback) => {
    let raw = mem[key];
    try {
      const stored = localStorage.getItem(key);
      if (stored !== null) raw = stored;
    } catch (e) {
      raw = mem[key];
    }
    if (raw === undefined || raw === null) return fallback;
    try {
      const value = JSON.parse(raw);
      return value === null || value === undefined ? fallback : value;
    } catch (e) {
      return fallback;
    }
  };
  const write = (key, value) => {
    const raw = JSON.stringify(value);
    mem[key] = raw;
    try {
      localStorage.setItem(key, raw);
    } catch (e) {
      return;
    }
  };
  const emit = () => listeners.forEach((fn) => fn());
  const COUPONS = { RAKHI10: { type: 'percent', value: 10, label: '10% off' }, NEST200: { type: 'flat', value: 200, label: '₹200 off', min: 1500 } };
  const FREE_SHIP = 999;
  const SHIP_FEE = 79;

  const api = {
    on: (fn) => listeners.push(fn),
    product: (id) => PRODUCTS.find((p) => p.id === Number(id)),
    bySlug: (slug) => PRODUCTS.find((p) => p.slug === slug),
    category: (slug) => CATEGORIES.find((c) => c.slug === slug),
    discount: (p) => Math.round((1 - p.price / p.mrp) * 100),
    money: (n) => '₹' + Math.round(n).toLocaleString('en-IN'),
    cart: () => read('rn_cart', []),
    wishlist: () => read('rn_wish', []),
    hasWish: (id) => api.wishlist().includes(Number(id)),
    addCart(id, qty = 1) {
      const cart = api.cart();
      const line = cart.find((l) => l.id === Number(id));
      if (line) line.qty = Math.min(10, line.qty + qty);
      else cart.push({ id: Number(id), qty: Math.min(10, qty) });
      write('rn_cart', cart);
      emit();
    },
    setQty(id, qty) {
      let cart = api.cart();
      if (qty < 1) cart = cart.filter((l) => l.id !== Number(id));
      else cart.forEach((l) => { if (l.id === Number(id)) l.qty = Math.min(10, qty); });
      write('rn_cart', cart);
      emit();
    },
    removeCart(id) {
      write('rn_cart', api.cart().filter((l) => l.id !== Number(id)));
      emit();
    },
    clearCart() {
      write('rn_cart', []);
      write('rn_coupon', '');
      emit();
    },
    toggleWish(id) {
      let list = api.wishlist();
      const has = list.includes(Number(id));
      list = has ? list.filter((x) => x !== Number(id)) : [...list, Number(id)];
      write('rn_wish', list);
      emit();
      return !has;
    },
    lines: () => api.cart().map((l) => ({ ...l, p: api.product(l.id) })).filter((l) => l.p),
    count: () => api.cart().reduce((s, l) => s + l.qty, 0),
    coupon: () => read('rn_coupon', ''),
    applyCoupon(code) {
      const key = String(code).trim().toUpperCase();
      const c = COUPONS[key];
      const sub = api.totals(true).subtotal;
      if (!c) return { ok: false, text: 'This coupon code is not valid.' };
      if (c.min && sub < c.min) return { ok: false, text: 'Add items worth ' + api.money(c.min) + ' or more to use ' + key + '.' };
      write('rn_coupon', key);
      emit();
      return { ok: true, text: key + ' applied: ' + c.label + '.' };
    },
    removeCoupon() {
      write('rn_coupon', '');
      emit();
    },
    totals(ignoreCoupon) {
      const lines = api.lines();
      const subtotal = lines.reduce((s, l) => s + l.p.price * l.qty, 0);
      const mrp = lines.reduce((s, l) => s + l.p.mrp * l.qty, 0);
      const c = ignoreCoupon ? null : COUPONS[api.coupon()];
      let off = 0;
      if (c && (!c.min || subtotal >= c.min)) off = c.type === 'percent' ? Math.round(subtotal * c.value / 100) : c.value;
      const shipping = subtotal === 0 || subtotal - off >= FREE_SHIP ? 0 : SHIP_FEE;
      return { subtotal, savings: mrp - subtotal, off, shipping, total: subtotal - off + shipping, code: off ? api.coupon() : '', freeAt: FREE_SHIP };
    },
    users: () => read('rn_users', []),
    user: () => read('rn_session', null),
    signup({ name, email, password }) {
      const users = api.users();
      if (users.some((u) => u.email === email)) return { ok: false, text: 'An account with this email already exists.' };
      users.push({ name, email, key: btoa(unescape(encodeURIComponent(password))) });
      write('rn_users', users);
      write('rn_session', { name, email });
      emit();
      return { ok: true };
    },
    login(email, password) {
      const key = btoa(unescape(encodeURIComponent(password)));
      const u = api.users().find((x) => x.email === email && x.key === key);
      if (!u) return { ok: false, text: 'Email or password is incorrect.' };
      write('rn_session', { name: u.name, email: u.email });
      emit();
      return { ok: true };
    },
    logout() {
      write('rn_session', null);
      emit();
    },
    orders() {
      const orders = read('rn_orders', null);
      if (orders) return orders;
      const seed = [{ id: 'RN10234', createdAt: Date.now() - 2 * 3600000, stage: 2, name: 'Demo Customer', city: 'Nagpur', payment: 'UPI', items: [{ name: 'Royal Rudraksha Silver Rakhi', qty: 1, price: 1899, image: PRODUCTS[0].images[0] }], total: 1899 }];
      write('rn_orders', seed);
      return seed;
    },
    placeOrder(details) {
      const t = api.totals();
      const id = 'RN' + Math.floor(10000 + Math.random() * 89999);
      const order = { id, createdAt: Date.now(), stage: 0, name: details.name, city: details.city, payment: details.payment, email: details.email, items: api.lines().map((l) => ({ name: l.p.name, qty: l.qty, price: l.p.price, image: l.p.images[0] })), total: t.total };
      write('rn_orders', [order, ...api.orders()]);
      api.clearCart();
      return order;
    },
    findOrder: (id) => api.orders().find((o) => o.id.toLowerCase() === String(id).trim().toLowerCase()),
    stage: (o) => Math.min(4, o.stage + Math.floor((Date.now() - o.createdAt) / (8 * 3600000)))
  };
  return api;
})();
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const reducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealObserver = 'IntersectionObserver' in window && !reducedMotion
  ? new IntersectionObserver((entries) => entries.forEach((en) => {
    if (en.isIntersecting) {
      en.target.classList.add('in');
      revealObserver.unobserve(en.target);
    }
  }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })
  : null;

function watchReveal(root = document) {
  $$('.reveal', root).forEach((el) => {
    if (el.dataset.watched) return;
    el.dataset.watched = '1';
    const index = [...el.parentNode.children].indexOf(el);
    el.style.setProperty('--d', (index % 5) * 90 + 'ms');
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add('in');
  });
}

function countUp(el) {
  const target = Number(el.dataset.count);
  const dec = Number(el.dataset.dec || 0);
  const suffix = el.dataset.suffix || '';
  if (reducedMotion) return;
  const start = performance.now();
  const tick = (now) => {
    const t = Math.min(1, (now - start) / 1600);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = (target * eased).toLocaleString('en-IN', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const ICONS = {
  search: '<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7"/></svg>',
  heart: '<svg viewBox="0 0 24 24"><path d="M12 20.5s-8-4.8-8-11A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5c0 6.200-8 11-8 11Z"/></svg>',
  bag: '<svg viewBox="0 0 24 24"><path d="M5 8h14l-1 12H6L5 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>',
  menu: '<svg viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  tick: '<svg viewBox="0 0 24 24"><path d="m5 12.5 4.500 4.500L19 7.500"/></svg>'
};

const NAV = [
  { label: 'Shop', href: 'shop.html', key: 'shop', sub: CATEGORIES.map((c) => ({ label: c.name, href: 'shop.html?cat=' + c.slug })) },
  { label: 'Collections', href: 'index.html#collections', key: 'collections', sub: [{ label: 'Royal Heritage', href: 'shop.html?cat=designer' }, { label: 'Sacred Silver', href: 'shop.html?cat=silver' }, { label: 'Festive Combos', href: 'shop.html?cat=hampers' }] },
  { label: 'Gifts', href: 'shop.html?cat=hampers', key: 'gifts', sub: [{ label: 'Under ₹1,000', href: 'shop.html?price=0-1000' }, { label: 'Premium Gifts', href: 'shop.html?price=2000-99999' }] },
  { label: 'Track Order', href: '#', key: 'track', act: 'track' }
];

const stars = (r) => '★'.repeat(Math.round(r)) + '☆'.repeat(5 - Math.round(r));

function productCard(p) {
  const on = Store.hasWish(p.id);
  const cat = Store.category(p.category).name;
  return `<article class="pcard reveal">
    <div class="pmedia">
      <a class="pimg" href="#" data-act="quick" data-id="${p.id}"><img loading="lazy" src="${p.images[0]}" alt="${esc(p.name)}">${p.badge ? `<span class="pbadge">${p.badge}</span>` : ''}<span class="pbadge off">${Store.discount(p)}% off</span></a>
      <button class="wish ${on ? 'on' : ''}" data-act="wish" data-id="${p.id}" aria-label="Add to wishlist">${ICONS.heart}</button>
      <button class="quick" data-act="quick" data-id="${p.id}">Quick View</button>
    </div>
    <div class="pbody">
      <span class="pcat">${cat}</span>
      <a class="pname" href="#" data-act="quick" data-id="${p.id}">${esc(p.name)}</a>
      <div class="stars"><span class="s">${stars(p.rating)}</span>${p.rating} (${p.reviews})</div>
      <div class="price"><b>${Store.money(p.price)}</b><s>${Store.money(p.mrp)}</s></div>
      <button class="btn ghost sm" data-act="add" data-id="${p.id}">Add to Cart</button>
    </div>
  </article>`;
}

function renderLayout() {
  const page = document.body.dataset.nav || '';
  const nav = NAV.map((n) => `<li><a href="${n.href}" ${n.act ? `data-act="${n.act}"` : ''} class="${n.key === page ? 'active' : ''}">${n.label}</a>${n.sub ? `<div class="dropdown">${n.sub.map((s) => `<a href="${s.href}">${s.label}</a>`).join('')}</div>` : ''}</li>`).join('');
  const mobile = NAV.map((n) => `<a href="${n.href}" ${n.act ? `data-act="${n.act}"` : ''}>${n.label}</a>${(n.sub || []).map((s) => `<a class="sub" href="${s.href}">${s.label}</a>`).join('')}`).join('');
  $('#site-header').outerHTML = `
    <div class="announce">Free shipping above <b>₹999</b> &nbsp;·&nbsp; Use code <b>RAKHI10</b> for 10% off &nbsp;·&nbsp; Order by 5 days before Raksha Bandhan for guaranteed delivery</div>
    <header class="site-header"><div class="wrap nav-row">
      <button class="icon-btn menu-btn" data-act="menu" aria-label="Open menu">${ICONS.menu}</button>
      <a class="logo" href="index.html" aria-label="RakhiNest home"><img src="images/logo.png" alt="RakhiNest, Tie the Bond, Share the Love"></a>
      <ul class="main-nav">${nav}</ul>
      <form class="search" id="search-form" action="shop.html" autocomplete="off"><input type="search" name="q" placeholder="Search rakhis, hampers, gifts" aria-label="Search"><button type="submit" aria-label="Search" class="icon-btn" style="width:28px;height:28px;top:4px">${ICONS.search}</button><div class="suggest" id="suggest"></div></form>
      <div class="icons">
        <button class="icon-btn" data-act="account" aria-label="Account" title="Account">${ICONS.user}</button>
        <button class="icon-btn" data-act="wishlist" aria-label="Wishlist" title="Wishlist">${ICONS.heart}<span class="badge" id="wish-count"></span></button>
        <button class="icon-btn" data-act="drawer" aria-label="Open cart" title="Cart">${ICONS.bag}<span class="badge" id="cart-count"></span></button>
      </div>
    </div></header>
    <nav class="mnav" id="mnav"><form action="shop.html"><input type="search" name="q" placeholder="Search rakhis and gifts"></form>${mobile}<a href="#" data-act="account">Account</a><a href="#" data-act="wishlist">Wishlist</a></nav>
    <div class="overlay" id="overlay" data-act="close"></div>
    <aside class="drawer" id="drawer"><header><h3>Your Cart</h3><button data-act="close" aria-label="Close cart">×</button></header><div class="dbody" id="drawer-body"></div><footer id="drawer-foot"></footer></aside>
    <aside class="drawer" id="wdrawer"><header><h3>Your Wishlist</h3><button data-act="close" aria-label="Close wishlist">×</button></header><div class="dbody" id="wdrawer-body"></div></aside>
    <div class="modal" id="modal" role="dialog" aria-modal="true"></div>
    <div class="toast" id="toast"></div>`;
  $('#site-footer').outerHTML = `
    <footer class="site-footer"><div class="wrap">
      <div class="foot-grid">
        <div><h4>RakhiNest</h4><p>Handcrafted rakhis and festive gifts that carry a sister's love across any distance. Designed in India, delivered worldwide.</p></div>
        <div><h4>Shop</h4><ul>${CATEGORIES.slice(0, 5).map((c) => `<li><a href="shop.html?cat=${c.slug}">${c.name}</a></li>`).join('')}</ul></div>
        <div><h4>Help</h4><ul><li><a href="#" data-act="track">Track Order</a></li><li><a href="#" data-act="account">My Account</a></li><li><a href="#" data-act="wishlist">Wishlist</a></li><li><a href="#" data-act="drawer">Cart</a></li></ul></div>
        <div><h4>Company</h4><ul><li><a href="index.html#why">Why RakhiNest</a></li><li><a href="index.html#collections">Collections</a></li><li><a href="index.html#reviews">Reviews</a></li><li><a href="index.html#newsletter">Newsletter</a></li></ul></div>
        <div><h4>Contact</h4><ul><li>care@rakhinest.in</li><li>Mon to Sat, 10 am to 7 pm</li><li>Sitabuldi, Nagpur, Maharashtra 440012</li></ul></div>
      </div>
      <div class="foot-bar"><span>© 2026 RakhiNest. All rights reserved.</span><span>Secure payments: UPI · Cards · Net Banking · Cash on Delivery</span></div>
      <div class="foot-credit"><span>Designed By</span><b>Ananya Marghade</b><span>PRN 24070521004</span><span>Batch A1</span></div>
    </div></footer>`;
}

function toast(text, withCart) {
  const t = $('#toast');
  t.innerHTML = `<span>${text}</span>${withCart ? '<a href="#" data-act="drawer">View Cart</a>' : ''}`;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 3200);
}

function closeAll() {
  ['#drawer', '#wdrawer', '#modal', '#mnav', '#overlay'].forEach((s) => $(s) && $(s).classList.remove('open'));
  const f = $('#filters');
  if (f) f.classList.remove('open');
}

function openLayer(sel) {
  closeAll();
  $(sel).classList.add('open');
  $('#overlay').classList.add('open');
}

function qtyControl(l) {
  return `<div class="qty"><button data-act="dec" data-id="${l.p.id}" aria-label="Decrease">−</button><span>${l.qty}</span><button data-act="inc" data-id="${l.p.id}" aria-label="Increase">+</button></div>`;
}

function renderDrawer() {
  const lines = Store.lines();
  const t = Store.totals();
  $('#drawer-body').innerHTML = lines.length
    ? lines.map((l) => `<div class="drow"><a href="#" data-act="quick" data-id="${l.p.id}"><img src="${l.p.images[0]}" alt=""></a><div><h4>${esc(l.p.name)}</h4><small>${Store.money(l.p.price)}</small><div style="margin-top:8px;display:flex;align-items:center">${qtyControl(l)}<button class="rm" data-act="rm" data-id="${l.p.id}">Remove</button></div></div></div>`).join('')
    : '<div class="empty"><h3>Your cart is empty</h3><p>Discover rakhis crafted for every brother.</p><a class="btn" href="shop.html">Shop Now</a></div>';
  $('#drawer-foot').innerHTML = lines.length
    ? `<div class="srow"><span>Subtotal</span><b>${Store.money(t.subtotal)}</b></div><p class="note" style="margin:0 0 14px">${t.shipping ? 'Add ' + Store.money(t.freeAt - t.subtotal) + ' more for free shipping.' : 'You qualify for free shipping.'}</p><div class="coupon" style="margin:0 0 12px"><input id="d-coupon" placeholder="Coupon code" value="${t.code}"><button class="btn sm" data-act="coupon">Apply</button></div>${t.off ? `<div class="srow disc"><span>Coupon ${t.code}</span><span>− ${Store.money(t.off)}</span></div>` : ''}<div class="srow total" style="margin-top:4px;padding-top:12px"><span>Total</span><span>${Store.money(t.total)}</span></div><button class="btn block" style="margin-top:14px" data-act="checkout">Checkout</button>`
    : '';
}

function renderWishDrawer() {
  const list = Store.wishlist().map(Store.product).filter(Boolean);
  $('#wdrawer-body').innerHTML = list.length
    ? list.map((p) => `<div class="drow"><a href="#" data-act="quick" data-id="${p.id}"><img src="${p.images[0]}" alt=""></a><div><h4>${esc(p.name)}</h4><small>${Store.money(p.price)}</small><div style="margin-top:8px;display:flex;align-items:center;gap:12px"><button class="btn sm" data-act="add" data-id="${p.id}">Add to Cart</button><button class="rm" data-act="wish" data-id="${p.id}">Remove</button></div></div></div>`).join('')
    : '<div class="empty"><h3>Your wishlist is empty</h3><p>Tap the heart on any rakhi to save it here.</p><button class="btn" data-act="close">Keep Browsing</button></div>';
}

function syncState() {
  const c = Store.count();
  const w = Store.wishlist().length;
  [['#cart-count', c], ['#wish-count', w]].forEach(([sel, n]) => {
    const badge = $(sel);
    const prev = badge.textContent;
    badge.textContent = n || '';
    if (n && prev !== badge.textContent) {
      badge.classList.remove('pop');
      void badge.offsetWidth;
      badge.classList.add('pop');
    }
  });
  $$('[data-act="wish"],.wishbtn').forEach((b) => b.classList.toggle('on', Store.hasWish(b.dataset.id)));
  renderDrawer();
  renderWishDrawer();
}

function bindSearch() {
  const form = $('#search-form');
  const input = $('input', form);
  const box = $('#suggest');
  const q0 = new URLSearchParams(location.search).get('q');
  if (q0) input.value = q0;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const hits = q.length < 2 ? [] : PRODUCTS.filter((p) => (p.name + ' ' + p.category + ' ' + p.short).toLowerCase().includes(q)).slice(0, 5);
    box.innerHTML = hits.map((p) => `<a href="#" data-act="quick" data-id="${p.id}"><img src="${p.images[0]}" alt=""><div>${esc(p.name)}<small>${Store.money(p.price)}</small></div></a>`).join('');
    box.classList.toggle('open', hits.length > 0);
  });
  document.addEventListener('click', (e) => { if (!form.contains(e.target)) box.classList.remove('open'); });
  form.addEventListener('submit', (e) => {
    if (!input.value.trim()) e.preventDefault();
  });
}

function bindActions() {
  document.addEventListener('click', (e) => {
    const el = e.target.closest('[data-act]');
    if (!el) return;
    const act = el.dataset.act;
    const id = el.dataset.id;
    if (act === 'add') {
      const qtyEl = $('#pd-qty');
      const qty = el.dataset.useqty && qtyEl ? Number(qtyEl.textContent) : 1;
      Store.addCart(id, qty);
      toast(esc(Store.product(id).name) + ' added to cart', true);
      if (el.closest('#modal')) closeAll();
    } else if (act === 'wish') {
      e.preventDefault();
      const added = Store.toggleWish(id);
      toast(added ? 'Saved to your wishlist' : 'Removed from wishlist');
    } else if (act === 'quick') { e.preventDefault(); $('#suggest').classList.remove('open'); openProduct(id); }
    else if (act === 'checkout') openCheckout();
    else if (act === 'account') { e.preventDefault(); openAccount(); }
    else if (act === 'track') { e.preventDefault(); openTrack(id); }
    else if (act === 'wishlist') openLayer('#wdrawer');
    else if (act === 'coupon') {
      const r = Store.applyCoupon($('#d-coupon').value);
      toast(r.text);
    }
    else if (act === 'drawer') { e.preventDefault(); openLayer('#drawer'); }
    else if (act === 'menu') openLayer('#mnav');
    else if (act === 'filters') openLayer('#filters');
    else if (act === 'close') closeAll();
    else if (act === 'inc') Store.setQty(id, Store.cart().find((l) => l.id === Number(id)).qty + 1);
    else if (act === 'dec') Store.setQty(id, Store.cart().find((l) => l.id === Number(id)).qty - 1);
    else if (act === 'rm') Store.removeCart(id);
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeAll(); });
}

document.addEventListener('DOMContentLoaded', () => {
  renderLayout();
  bindActions();
  bindSearch();
  Store.on(syncState);
  syncState();
  watchReveal();
  const header = $('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 24);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
});
const validators = {
  optional: () => true,
  required: (v) => v.trim().length > 0,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
  phone: (v) => /^[6-9]\d{9}$/.test(v.trim()),
  pin: (v) => /^\d{6}$/.test(v.trim()),
  password: (v) => v.length >= 6,
  card: (v) => /^\d{16}$/.test(v.replace(/\s/g, '')),
  expiry: (v) => /^(0[1-9]|1[0-2])\/\d{2}$/.test(v.trim()),
  cvv: (v) => /^\d{3}$/.test(v.trim()),
  upi: (v) => /^[\w.\-]{2,}@[a-zA-Z]{2,}$/.test(v.trim())
};

function checkForm(form) {
  let ok = true;
  $$('[data-v]', form).forEach((input) => {
    if (input.closest('[hidden]')) return;
    const valid = validators[input.dataset.v](input.value);
    input.closest('.field').classList.toggle('invalid', !valid);
    if (!valid) ok = false;
  });
  return ok;
}

function field(label, name, type, v, extra = '') {
  return `<div class="field"><label for="${name}">${label}</label><input id="${name}" name="${name}" type="${type}" data-v="${v}" ${extra}></div>`;
}

function showModal(html, cls = '') {
  const m = $('#modal');
  m.className = 'modal ' + cls;
  m.innerHTML = '<button class="close" data-act="close" aria-label="Close">×</button>' + html;
  m.scrollTop = 0;
  openLayer('#modal');
  return m;
}

function openProduct(id) {
  const p = Store.product(id);
  if (!p) return;
  const cat = Store.category(p.category);
  const m = showModal(`
    <div class="mimg"><div class="mmain"><img id="main-img" src="${p.images[0]}" alt="${esc(p.name)}"></div><div class="mthumbs">${p.images.map((src, i) => `<button class="${i ? '' : 'on'}" data-src="${src}" aria-label="View image ${i + 1}"><img src="${src}" alt=""></button>`).join('')}</div></div>
    <div class="mbody"><span class="pcat">${cat.name}</span><h2>${esc(p.name)}</h2>
      <div class="stars"><span class="s">${stars(p.rating)}</span>${p.rating} (${p.reviews} reviews)</div>
      <div class="price"><b style="font-size:26px;font-family:var(--serif);font-weight:500">${Store.money(p.price)}</b><s>${Store.money(p.mrp)}</s><em>${Store.discount(p)}% off</em></div>
      <p style="color:var(--muted);margin-bottom:22px">${esc(p.description)}</p>
      <div class="opts" style="margin-top:0"><div class="qty"><button id="q-dec" aria-label="Decrease">−</button><span id="pd-qty">1</span><button id="q-inc" aria-label="Increase">+</button></div><button class="btn" data-act="add" data-id="${p.id}" data-useqty="1">Add to Cart</button><button class="wishbtn ${Store.hasWish(p.id) ? 'on' : ''}" data-act="wish" data-id="${p.id}" aria-label="Wishlist">${ICONS.heart}</button></div>
      <button class="btn ghost block" id="buy-now">Buy It Now</button>
      <div class="field" style="margin-top:22px"><label for="pin">Check delivery</label><div class="pincode"><input id="pin" inputmode="numeric" maxlength="6" placeholder="6 digit pincode"><button class="btn sm" id="pin-btn">Check</button></div><div class="pin-msg" id="pin-msg"></div></div>
      <ul class="perks"><li><b>Includes</b>Roli, chawal and a greeting card</li><li><b>Delivery</b>Free above ₹999, else ₹79</li><li><b>Returns</b>7 day easy replacement</li></ul>
    </div>`, 'wide');
  let qty = 1;
  const show = () => { $('#pd-qty').textContent = qty; };
  $('#q-inc', m).addEventListener('click', () => { qty = Math.min(10, qty + 1); show(); });
  $('#q-dec', m).addEventListener('click', () => { qty = Math.max(1, qty - 1); show(); });
  $('.mthumbs', m).addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    $$('.mthumbs button', m).forEach((x) => x.classList.toggle('on', x === b));
    $('#main-img').src = b.dataset.src;
  });
  $('#buy-now', m).addEventListener('click', () => { Store.addCart(p.id, qty); openCheckout(); });
  $('#pin-btn', m).addEventListener('click', () => {
    const msg = $('#pin-msg');
    if (!validators.pin($('#pin').value)) { msg.textContent = 'Enter a valid 6 digit pincode.'; msg.style.color = '#a3262a'; return; }
    const d = new Date(Date.now() + 4 * 86400000);
    msg.style.color = 'var(--ok)';
    msg.textContent = 'Delivery available. Expected by ' + d.toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' }) + '.';
  });
}

function openCheckout() {
  if (!Store.lines().length) {
    showModal('<div class="mpad"><div class="empty"><h3>Nothing to check out yet</h3><p>Add a rakhi to your cart first.</p><button class="btn" data-act="close">Keep Browsing</button></div></div>', 'one');
    return;
  }
  const user = Store.user();
  const t = Store.totals();
  const states = ['Maharashtra', 'Delhi', 'Karnataka', 'Tamil Nadu', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal', 'Madhya Pradesh', 'Telangana'];
  const m = showModal(`<form class="mpad co-grid" id="co-form" novalidate>
    <div>
      <h2 style="font-size:32px;margin-bottom:26px">Checkout</h2>
      <div class="fblock"><h3>Contact</h3><div class="two">${field('Full name', 'name', 'text', 'required', `value="${user ? esc(user.name) : ''}" autocomplete="name"`)}${field('Phone', 'phone', 'tel', 'phone', 'maxlength="10" placeholder="10 digit mobile number" autocomplete="tel"')}</div>${field('Email', 'email', 'email', 'email', `value="${user ? esc(user.email) : ''}" autocomplete="email"`)}</div>
      <div class="fblock"><h3>Delivery Address</h3>${field('Address', 'address', 'text', 'required', 'placeholder="House no., street, area" autocomplete="street-address"')}<div class="three-f">${field('City', 'city', 'text', 'required')}<div class="field"><label for="state">State</label><select id="state" name="state" data-v="required">${states.map((s) => `<option>${s}</option>`).join('')}</select></div>${field('Pincode', 'pincode', 'text', 'pin', 'maxlength="6" inputmode="numeric"')}</div></div>
      <div class="fblock" style="margin-bottom:0"><h3>Payment</h3>
        <div class="pay"><label><input type="radio" name="pay" value="UPI" checked>UPI<small>GPay, PhonePe, Paytm</small></label><label><input type="radio" name="pay" value="Card">Credit / Debit Card<small>Visa, Mastercard, RuPay</small></label><label><input type="radio" name="pay" value="Cash on Delivery">Cash on Delivery<small>Pay when it arrives</small></label></div>
        <div id="pay-upi" style="margin-top:20px">${field('UPI ID', 'upi', 'text', 'upi', 'placeholder="name@bank"')}</div>
        <div id="pay-card" hidden style="margin-top:20px">${field('Card number', 'card', 'text', 'card', 'maxlength="19" inputmode="numeric" placeholder="1234 5678 9012 3456"')}<div class="two">${field('Expiry (MM/YY)', 'exp', 'text', 'expiry', 'maxlength="5" placeholder="08/28"')}${field('CVV', 'cvv', 'password', 'cvv', 'maxlength="3" inputmode="numeric"')}</div></div>
      </div>
    </div>
    <aside class="summary"><h3>Your Order</h3>
      ${Store.lines().map((l) => `<div class="mini"><img src="${l.p.images[0]}" alt=""><span>${esc(l.p.name)} × ${l.qty}</span><b>${Store.money(l.p.price * l.qty)}</b></div>`).join('')}
      <div style="border-top:1px solid var(--line);margin-top:14px;padding-top:12px">
        <div class="srow"><span>Subtotal</span><span>${Store.money(t.subtotal)}</span></div>
        ${t.off ? `<div class="srow disc"><span>Coupon ${t.code}</span><span>− ${Store.money(t.off)}</span></div>` : ''}
        <div class="srow"><span>Shipping</span><span>${t.shipping ? Store.money(t.shipping) : 'Free'}</span></div>
        <div class="srow total"><span>Total</span><span>${Store.money(t.total)}</span></div></div>
      <button class="btn block" style="margin-top:24px" type="submit">Place Order</button>
      <p class="note">This is a demo store and no payment is taken.</p></aside></form>`, 'xwide');
  const form = $('#co-form', m);
  form.addEventListener('change', (e) => {
    if (e.target.name !== 'pay') return;
    $('#pay-upi').hidden = e.target.value !== 'UPI';
    $('#pay-card').hidden = e.target.value !== 'Card';
  });
  $('#card').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!checkForm(form)) { $('.invalid', form).scrollIntoView({ behavior: 'smooth', block: 'center' }); return; }
    const order = Store.placeOrder({ name: $('#name').value.trim(), email: $('#email').value.trim(), city: $('#city').value.trim(), payment: $('[name=pay]:checked').value });
    showModal(`<div class="mpad"><div class="done"><div class="tick">${ICONS.tick}</div><span class="eyebrow">Order confirmed</span><h1>Thank you, ${esc(order.name.split(' ')[0])}</h1><p>Your order <b>${order.id}</b> has been placed. A confirmation will be sent to ${esc(order.email)}.</p><p>Order total: <b>${Store.money(order.total)}</b></p><button class="btn" data-act="track" data-id="${order.id}">Track Order</button><button class="btn ghost" data-act="close">Continue Shopping</button></div></div>`, 'one');
  });
}

function openAccount(tab = 'login') {
  const user = Store.user();
  if (user) {
    const orders = Store.orders().filter((o) => !o.email || o.email === user.email || o.id === 'RN10234');
    const m = showModal(`<div class="mpad"><span class="eyebrow">My Account</span><h2 style="font-size:34px;margin:8px 0 4px">Namaste, ${esc(user.name)}</h2><p style="color:var(--muted)">${esc(user.email)}</p>
      <h3 style="margin:30px 0 4px;font-size:22px">Your Orders</h3>
      ${orders.length ? orders.map((o) => `<div class="ord"><div><b>${o.id}</b><small>${new Date(o.createdAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })} · ${o.items.length} item${o.items.length > 1 ? 's' : ''} · ${Store.money(o.total)}</small></div><button class="link" data-act="track" data-id="${o.id}">Track</button></div>`).join('') : '<p style="margin-top:16px;color:var(--muted)">No orders yet.</p>'}
      <button class="btn ghost" style="margin-top:30px" id="logout">Sign Out</button></div>`, 'one narrow');
    $('#logout', m).addEventListener('click', () => { Store.logout(); openAccount(); });
    return;
  }
  const m = showModal(`<div class="mpad"><div class="tabs"><button data-tab="login" class="${tab === 'login' ? 'on' : ''}">Sign In</button><button data-tab="signup" class="${tab === 'signup' ? 'on' : ''}">Create Account</button></div>
    <form id="auth-form" novalidate>
      ${tab === 'signup' ? field('Full name', 'name', 'text', 'required', 'autocomplete="name"') : ''}
      ${field('Email', 'email', 'email', 'email', 'autocomplete="email"')}
      ${field('Password', 'password', 'password', 'password', 'placeholder="At least 6 characters"')}
      ${tab === 'signup' ? field('Confirm password', 'confirm', 'password', 'password') : ''}
      <div class="msg err" id="auth-msg"></div>
      <button class="btn block" type="submit">${tab === 'login' ? 'Sign In' : 'Create Account'}</button></form></div>`, 'one narrow');
  $$('.tabs button', m).forEach((b) => b.addEventListener('click', () => openAccount(b.dataset.tab)));
  const form = $('#auth-form', m);
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const msg = $('#auth-msg');
    msg.textContent = '';
    if (!checkForm(form)) { msg.textContent = 'Please correct the highlighted fields.'; return; }
    const email = $('#email').value.trim().toLowerCase();
    let r;
    if (tab === 'signup') {
      if ($('#password').value !== $('#confirm').value) { msg.textContent = 'Passwords do not match.'; return; }
      r = Store.signup({ name: $('#name').value.trim(), email, password: $('#password').value });
    } else r = Store.login(email, $('#password').value);
    if (!r.ok) { msg.textContent = r.text; return; }
    openAccount();
    toast('Signed in successfully');
  });
}

function openTrack(prefill) {
  const steps = [['Order Placed', 'We have received your order.'], ['Packed', 'Your rakhi is being gift-wrapped.'], ['Shipped', 'Handed over to our courier partner.'], ['Out for Delivery', 'Arriving at your doorstep today.'], ['Delivered', 'Delivered. Happy Raksha Bandhan!']];
  const m = showModal(`<div class="mpad"><span class="eyebrow">Order tracking</span><h2 style="font-size:34px;margin:8px 0 8px">Track Your Order</h2><p style="color:var(--muted)">Enter the order ID from your confirmation. To see a sample, try <b>RN10234</b>.</p>
    <form id="track-form" class="trackf" novalidate><input id="order-id" placeholder="Order ID, e.g. RN10234" aria-label="Order ID"><button class="btn" type="submit">Track</button></form><div id="track-out"></div></div>`, 'one narrow');
  const out = $('#track-out', m);
  const run = (id) => {
    const o = Store.findOrder(id);
    if (!o) { out.innerHTML = `<div class="msg err">No order found for “${esc(id)}”. Check the order ID and try again.</div>`; return; }
    const cur = Store.stage(o);
    out.innerHTML = `<div class="tbox"><b style="font-family:var(--serif);font-size:22px;color:var(--burgundy)">Order ${o.id}</b><div style="color:var(--muted);font-size:14px;margin-top:4px">${o.items.map((i) => esc(i.name) + ' × ' + i.qty).join(', ')} · ${Store.money(o.total)} · ${esc(o.payment)}</div></div>
      <div class="tl">${steps.map(([t, d], i) => `<div class="step ${i < cur ? 'done-s' : i === cur ? 'done-s cur' : ''}"><i>${i <= cur ? '✓' : i + 1}</i><div><b>${t}</b><span>${d}</span></div></div>`).join('')}</div>`;
  };
  $('#track-form', m).addEventListener('submit', (e) => {
    e.preventDefault();
    const v = $('#order-id').value;
    if (!v.trim()) { out.innerHTML = '<div class="msg err">Please enter your order ID.</div>'; return; }
    run(v);
  });
  if (prefill) { $('#order-id').value = prefill; run(prefill); }
}
const params = () => new URLSearchParams(location.search);

const Pages = {
  home() {
    const best = [...PRODUCTS].sort((a, b) => b.reviews - a.reviews).slice(0, 8);
    $('#cat-grid').innerHTML = CATEGORIES.map((c) => `<a class="cat reveal" href="shop.html?cat=${c.slug}"><img loading="lazy" src="${c.image}" alt=""><div><h3>${c.name}</h3><span>${c.tagline}</span></div></a>`).join('');
    $('#bestsellers').innerHTML = best.map(productCard).join('');
    watchReveal();
    setTimeout(() => $$('[data-count]').forEach(countUp), 700);
    $('#news-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const input = $('input', e.target);
      const msg = $('#news-msg');
      if (!validators.email(input.value)) {
        msg.textContent = 'Please enter a valid email address.';
        msg.className = 'msg err';
        return;
      }
      msg.textContent = 'Thank you. Your first offer code is on its way to ' + input.value.trim() + '.';
      msg.className = 'msg ok';
      input.value = '';
    });
  },

  shop() {
    const q = params();
    const state = {
      cats: q.get('cat') ? q.get('cat').split(',') : [],
      price: q.get('price') || '',
      rating: q.get('rating') || '',
      sort: q.get('sort') || 'featured',
      q: (q.get('q') || '').trim().toLowerCase()
    };
    const prices = [['', 'All prices'], ['0-500', 'Under ₹500'], ['500-1000', '₹500 to ₹1,000'], ['1000-2000', '₹1,000 to ₹2,000'], ['2000-99999', 'Above ₹2,000']];
    const ratings = [['', 'All ratings'], ['4', '4 stars & above'], ['4.5', '4.5 stars & above']];
    const sorts = [['featured', 'Featured'], ['popular', 'Most Popular'], ['rating', 'Top Rated'], ['discount', 'Biggest Discount'], ['low', 'Price: Low to High'], ['high', 'Price: High to Low']];
    $('#filters').innerHTML = `
      <div class="fgroup"><h4>Category</h4>${CATEGORIES.map((c) => `<label><input type="checkbox" name="cat" value="${c.slug}" ${state.cats.includes(c.slug) ? 'checked' : ''}>${c.name}<em>${PRODUCTS.filter((p) => p.category === c.slug).length}</em></label>`).join('')}</div>
      <div class="fgroup"><h4>Price</h4>${prices.map(([v, l]) => `<label><input type="radio" name="price" value="${v}" ${state.price === v ? 'checked' : ''}>${l}</label>`).join('')}</div>
      <div class="fgroup"><h4>Rating</h4>${ratings.map(([v, l]) => `<label><input type="radio" name="rating" value="${v}" ${state.rating === v ? 'checked' : ''}>${l}</label>`).join('')}</div>
      <button class="btn ghost block sm" id="clear-filters">Clear All</button>`;
    $('#sort').innerHTML = sorts.map(([v, l]) => `<option value="${v}" ${state.sort === v ? 'selected' : ''}>${l}</option>`).join('');

    const render = () => {
      const [lo, hi] = state.price ? state.price.split('-').map(Number) : [0, Infinity];
      let list = PRODUCTS.filter((p) =>
        (!state.cats.length || state.cats.includes(p.category)) &&
        p.price >= lo && p.price <= hi &&
        (!state.rating || p.rating >= Number(state.rating)) &&
        (!state.q || (p.name + ' ' + p.short + ' ' + p.description + ' ' + Store.category(p.category).name).toLowerCase().includes(state.q)));
      const sorter = { popular: (a, b) => b.reviews - a.reviews, rating: (a, b) => b.rating - a.rating, discount: (a, b) => Store.discount(b) - Store.discount(a), low: (a, b) => a.price - b.price, high: (a, b) => b.price - a.price };
      if (sorter[state.sort]) list = [...list].sort(sorter[state.sort]);
      const title = state.cats.length === 1 ? Store.category(state.cats[0]).name : state.q ? 'Results for “' + esc(q.get('q')) + '”' : 'All Rakhis & Gifts';
      $('#shop-title').innerHTML = title;
      $('#crumb-now').innerHTML = title;
      $('#result-count').textContent = list.length + (list.length === 1 ? ' product' : ' products');
      $('#grid').innerHTML = list.length ? list.map(productCard).join('') : '<div class="empty" style="grid-column:1/-1"><h3>No rakhis match your filters</h3><p>Try widening the price range or clearing a filter.</p><button class="btn" id="reset-empty">Clear Filters</button></div>';
      watchReveal($('#grid'));
      const next = new URLSearchParams();
      if (state.cats.length) next.set('cat', state.cats.join(','));
      if (state.price) next.set('price', state.price);
      if (state.rating) next.set('rating', state.rating);
      if (state.sort !== 'featured') next.set('sort', state.sort);
      if (q.get('q')) next.set('q', q.get('q'));
      history.replaceState(null, '', location.pathname + (next.toString() ? '?' + next : ''));
    };
    const reset = () => {
      state.cats = []; state.price = ''; state.rating = ''; state.q = ''; q.delete('q');
      $$('#filters input').forEach((i) => { i.checked = i.type === 'radio' && i.value === ''; });
      render();
    };
    $('#filters').addEventListener('change', (e) => {
      if (e.target.name === 'cat') state.cats = $$('[name=cat]:checked').map((i) => i.value);
      else state[e.target.name] = e.target.value;
      render();
    });
    $('#filters').addEventListener('click', (e) => { if (e.target.id === 'clear-filters') reset(); });
    $('#grid').addEventListener('click', (e) => { if (e.target.id === 'reset-empty') reset(); });
    $('#sort').addEventListener('change', (e) => { state.sort = e.target.value; render(); });
    render();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const fn = Pages[document.body.dataset.page];
  if (fn) fn();
});
