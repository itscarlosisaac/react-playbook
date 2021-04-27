import React from 'react'

export const AppLogo = () => {
  return (
    <>
      <svg width="42px" height="50px" viewBox="0 0 42 50" version="1.1" xmlns="http://www.w3.org/2000/svg" >
          <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                  <stop stop-color="#59B4FF" offset="0%"></stop>
                  <stop stop-color="#2D7DFF" offset="100%"></stop>
              </linearGradient>
              <filter x="-23.5%" y="-23.5%" width="147.1%" height="147.1%" filterUnits="objectBoundingBox" id="filter-2">
                  <feOffset dx="0" dy="0" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                  <feGaussianBlur stdDeviation="2" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
                  <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.265624146 0" type="matrix" in="shadowBlurOuter1" result="shadowMatrixOuter1"></feColorMatrix>
                  <feMerge>
                      <feMergeNode in="shadowMatrixOuter1"></feMergeNode>
                      <feMergeNode in="SourceGraphic"></feMergeNode>
                  </feMerge>
              </filter>
          </defs>
          <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <path d="M16.7647059,0 C18.4215601,0 19.7647059,1.34314575 19.7647059,3 L19.765,9.722 L22.235,9.722 L22.2352941,3 C22.2352941,1.34314575 23.5784399,3.04359188e-16 25.2352941,0 L32.1176471,0 C37.5755199,-1.00259497e-15 42,4.42448012 42,9.88235294 L42,40.1176471 C42,45.5755199 37.5755199,50 32.1176471,50 L25.2352941,50 C23.5784399,50 22.2352941,48.6568542 22.2352941,47 L22.2352941,40.2777778 L22.2352941,40.2777778 L19.765,40.278 L19.7647059,47 C19.7647059,48.6568542 18.4215601,50 16.7647059,50 L9.88235294,50 C4.42448012,50 -3.55271368e-15,45.5755199 -3.55271368e-15,40.1176471 L0,9.88235294 C0,4.42448012 4.42448012,0 9.88235294,0 L16.7647059,0 Z" id="Combined-Shape" fill="url(#linearGradient-1)"></path>
              <g id="Group" transform="translate(4.000000, 8.000000)" fill="#FFFFFF" fillRule="nonzero">
                  <g id="ReactLogo" filter="url(#filter-2)">
                      <path d="M25.3472786,33.557092 C27.1402473,32.3731826 27.7246094,28.7836583 26.9675522,24.4124944 C26.9078255,24.0785541 26.8414192,23.7370546 26.7683334,23.3879959 C26.9808464,23.3196663 27.1867447,23.2437776 27.3925781,23.1678888 C31.2242317,21.7184428 34,19.3734499 34,16.9677609 C34,14.6683458 31.3835678,12.4372602 27.7711067,11.0181253 C27.412487,10.8815403 27.0539322,10.7525145 26.6953125,10.631048 C26.7551041,10.3503189 26.8082161,10.0695156 26.8613281,9.78871226 C27.678112,5.26577081 27.1402473,1.63066876 25.3273697,0.43164091 C23.5808334,-0.714324085 20.7320442,0.477144532 17.849987,3.34572547 C17.5644531,3.62652877 17.2855339,3.92252464 17.0199089,4.2184464 C16.8405991,4.02116523 16.6546745,3.82388405 16.46875,3.63416211 C13.4472656,0.568225886 10.4191666,-0.721883319 8.60622406,0.484777876 C6.86643219,1.63822799 6.34841156,5.06085629 7.07888031,9.34093884 C7.15196609,9.76596045 7.23166656,10.1833487 7.32459641,10.6082962 C6.89963531,10.7448812 6.48122406,10.8966588 6.08946609,11.0560697 C2.54334641,12.460012 0,14.6759791 0,16.9677609 C0,19.3355056 2.70936203,21.7108094 6.39490891,23.1526962 C6.69373703,23.2665294 6.99256516,23.3803625 7.29807281,23.4790772 C7.19846344,23.9344099 7.11208344,24.3821092 7.03244781,24.8450752 C6.33518219,29.0569023 6.87966156,32.3960085 8.61951828,33.5418994 C10.412487,34.7257347 13.4273567,33.5115142 16.3625259,30.5746779 C16.5949478,30.3393782 16.8273697,30.0965193 17.0597916,29.8385419 C17.3519402,30.1648488 17.6574478,30.4759632 17.9628906,30.7795183 C20.8050652,33.5722845 23.6140366,34.7029829 25.3472786,33.557092 Z M25.3073959,10.2212931 C23.8332291,9.84184923 22.3390884,9.56860517 20.8382683,9.41682761 C19.974987,8.00532601 19.0320053,6.6545206 18.009388,5.38716321 C18.2683334,5.10635991 18.5207291,4.8407492 18.7863541,4.57513848 C21.2566147,2.11638658 23.5609245,1.15258429 24.6101303,1.84314251 C25.7324219,2.57927847 26.1640625,5.55413334 25.4601822,9.46240534 C25.4136848,9.72038272 25.3671875,9.97087497 25.3073959,10.2212931 Z M8.70583344,10.2061005 C8.61951828,9.81909742 8.54649734,9.42446096 8.47341156,9.02982449 C7.84923172,5.35677806 8.26096344,2.5868377 9.31016922,1.89627948 C10.4257812,1.15258429 12.9027214,2.21502716 15.5124741,4.85594177 C15.6784897,5.0229119 15.8445053,5.2050005 16.0172005,5.38716321 C14.9879036,6.6545206 14.0383072,8.00532601 13.1683464,9.41682761 C11.6675911,9.56860517 10.1800652,9.83421588 8.70583344,10.2061005 Z M18.9788933,9.26505006 C17.6640625,9.19679463 16.3425522,9.19679463 15.0277214,9.26505006 C15.6784897,8.2861293 16.3492317,7.37546398 17.0132942,6.54824667 C17.7105598,7.41340837 18.3679428,8.32407369 18.9788933,9.26505006 Z M17,23.1526962 C15.9574089,23.1526962 14.9480209,23.1147518 13.9719009,23.0464964 C13.3941536,22.0826941 12.8496094,21.09614 12.3382683,20.0868341 C11.8269272,19.0775282 11.3554688,18.0530297 10.9105339,17.0057053 C11.3488541,15.958455 11.8269272,14.9339565 12.3316536,13.9246506 C12.8363152,12.9153447 13.3808594,11.9363498 13.9519272,10.9725475 C14.9480209,10.8890995 15.9640884,10.8435959 17,10.8435959 C18.0359116,10.8435959 19.0585938,10.8890995 20.0480728,10.9725475 C20.6125259,11.9287906 21.1503906,12.9077113 21.6617317,13.909458 C22.1730728,14.9112047 22.6511459,15.9357032 23.1027603,16.9753942 C22.6578255,18.0226445 22.1796875,19.0547023 21.6683464,20.0716415 C21.1636848,21.0809474 20.6257553,22.0599423 20.0613022,23.0313038 C19.071888,23.1147518 18.0425911,23.1526962 17,23.1526962 Z M10.1535416,15.0857341 C9.73513031,13.9550358 9.38319016,12.8470151 9.09104156,11.777013 C10.0472527,11.5341541 11.0632553,11.336873 12.1191406,11.1850954 C11.7672005,11.8149574 11.421875,12.460012 11.0964584,13.1126259 C10.7711067,13.7576805 10.4523697,14.4179276 10.1535416,15.0857341 Z M23.8597527,15.0857341 C23.5476303,14.4179276 23.2288933,13.7501212 22.896862,13.0974333 C22.5715103,12.4523787 22.2327995,11.8149574 21.8808594,11.1850954 C22.9499741,11.336873 23.9726562,11.5417134 24.9289322,11.7922056 C24.6234245,12.9153447 24.2648697,14.0080986 23.8597527,15.0857341 Z M7.68321609,21.9005314 C7.40429688,21.8095241 7.13205719,21.7108094 6.85975266,21.6046096 C5.4453125,21.09614 3.83826828,20.2917486 2.67615891,19.236865 C2.00548172,18.7056435 1.55393219,17.8860596 1.42773438,16.9677609 C1.42773438,15.5790111 3.52614594,13.8032582 6.55430984,12.596597 C6.93283844,12.4448194 7.31798172,12.3082345 7.703125,12.1792087 C8.15467453,13.82601 8.69921875,15.4424261 9.33007812,17.0057053 C8.69260406,18.5918104 8.14138031,20.2309783 7.68321609,21.9005314 Z M26.3765755,21.8095241 C25.9117317,20.1550895 25.3405991,18.5386734 24.6832161,16.9677609 C25.3206902,15.4196743 25.8586197,13.82601 26.3101692,12.1944013 C26.6554947,12.3082345 26.9875259,12.4296269 27.306263,12.5510934 C30.4007683,13.7653138 32.5722656,15.5714519 32.5722656,16.9526424 C32.5722656,18.4400328 30.2546616,20.360004 26.9410286,21.6121689 C26.7551041,21.6804984 26.5691147,21.7487538 26.3765755,21.8095241 Z M21.8742447,22.8340226 C22.2327995,22.1965273 22.5715103,21.5439134 22.9035416,20.8912255 C23.2421875,20.2234191 23.5609245,19.5479793 23.8730469,18.8649803 C24.2980728,19.9653676 24.6699219,21.0809474 24.9953384,22.2269124 C23.9660416,22.4925231 22.9234505,22.6973635 21.8742447,22.8340226 Z M12.1523437,22.871967 C11.1164322,22.7429413 10.0871353,22.5532193 9.07106781,22.3028012 C9.36328125,21.2099732 9.72851562,20.0792007 10.1535416,18.9257506 C10.4589844,19.593557 10.7711067,20.2538042 11.103138,20.9064181 C11.4417839,21.5666652 11.7871094,22.2269124 12.1523437,22.871967 Z M18.8991928,29.5501794 C18.6203384,29.2769353 18.3414192,28.9810135 18.0558853,28.6774584 C19.071888,27.3949085 20.0081902,26.0364697 20.8581772,24.6097755 C22.3789062,24.4656313 23.8929558,24.2000206 25.3870964,23.8129434 C25.4535027,24.1241318 25.5132942,24.4352462 25.5664062,24.7388013 C25.8918228,26.3779692 25.9449348,28.0854667 25.7324219,29.7702124 C25.6726303,30.6960703 25.2741928,31.561232 24.6367188,32.1455163 C23.5808334,32.8437078 21.3297005,31.9330425 18.8991928,29.5501794 Z M9.33669281,32.1152052 C8.28087234,31.4170136 7.84255219,28.7381546 8.44020844,25.1334377 C8.51329422,24.7084161 8.59299469,24.2834686 8.68592453,23.8660804 C10.1734505,24.2303317 11.6742058,24.4807498 13.1949348,24.6097755 C14.0715103,26.0289105 15.0344009,27.3873492 16.0636978,28.6622659 C15.8511848,28.8974914 15.6386719,29.1251578 15.4261589,29.3376315 C14.3304558,30.4835965 13.0621223,31.3942618 11.6808853,32.0165646 C10.943737,32.4187603 10.09375,32.4567047 9.33669281,32.1152052 Z M17.053112,27.4935491 C16.3757553,26.6587725 15.6984634,25.7329146 15.0410156,24.7388013 C15.6784897,24.7691864 16.3359375,24.7843049 17,24.7843049 C17.6839714,24.7843049 18.3547134,24.7691864 19.0187759,24.7312421 C18.4078255,25.6949702 17.7503777,26.6132689 17.053112,27.4935491 Z" id="R"></path>
                      <path d="M17,20.4738372 C18.6800652,20.4738372 20.0413933,18.9181173 20.0413933,16.9981461 C20.0413933,15.0781748 18.6800652,13.5224549 17,13.5224549 C15.3199348,13.5224549 13.9586067,15.0781748 13.9586067,16.9981461 C13.9586067,18.9181173 15.3199348,20.4738372 17,20.4738372 Z" id="Path"></path>
                  </g>
              </g>
          </g>
      </svg>
    </>
  )
}
