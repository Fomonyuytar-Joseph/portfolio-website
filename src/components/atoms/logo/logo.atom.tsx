import Link from 'next/link';
import React from 'react';


interface LogoAtomProps {
  onClick?: (e:React.MouseEvent<HTMLAnchorElement, MouseEvent> )=>void
}

const LogoAtom:React.FC<LogoAtomProps> = ({ onClick }) => {

  return  (
    <Link href={"#"} onClick={onClick}>
      <svg
        version="1.1"
        viewBox="0 0 2048 1551"
        width="70"
        height="70"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          transform="translate(0)"
          d="m0 0h2048v1551h-2048z"
          fill="#0a192f"
        />
        <path
          transform="translate(1677,485)"
          d="m0 0h12l16 5 4 2v2l6 2 3 2v2l4 2 4 5 5 5 4 6 4 14 2 19 1 189v116l-2 27-5 30-7 23h-2l-2 9-3 7h-2l-1 6-4 7h-2l-2 5-4 8-4 4-2 4-5 5-3 5-6 5-3 5-12 11-13 10-20 12-29 13-24 7-16 4-11 2-12 1h-16l-21-2-19-4-26-8-16-7-20-11-17-12-14-12-9-8-7-8-2-4-5-5-9-12-13-25-8-21-6-21-3-16-2-24v-9l3-15 6-12 9-11 8-7 12-7 15-4h10l16 4 10 6 12 11 7 10 5 15 4 15 3 24 4 16 6 11 9 10v2l4 2 15 10 16 7v2l7 1 11 2h24l13-2v-2l16-5 16-9 10-9 9-12 7-16h2l4-17 2-18 1-24v-50l-2-144v-108l5-14 11-14 5-5 10-7 15-7z"
          fill="#00FDDA"
        />
        <path
          transform="translate(932,717)"
          d="m0 0h109l144 1 19 1 14 4 16 9 8 8 8 10 4 9 1 4v15l-2 11-4 11-8 13-10 10-13 6-12 3-7 1h-157l-77-1-4 1-1 2-1 162-2 21-4 11-7 11-2 4-5 4-6 7-15 7-7 2h-15l-10-2-11-5-11-8-9-10-6-10-4-13-2-14-1-150v-82l4-10 8-15 12-11 14-10 10-5 6-1z"
          fill="#00FDDA"
        />
        <path
          transform="translate(916,485)"
          d="m0 0h204l53 1 30 1 16 4 13 7 7 6 10 14 4 8 1 4v20l-4 16-2 3h-2l-2 6-6 9-8 7-13 6-13 3-9 1-53 1-244-1-11-1-10-5-13-12-9-9v-3l-4-2-7-15-2-7v-11l9-19 6-8 8-8 10-7 13-6 13-2z"
          fill="#00FDDA"
        />
        <path
          transform="translate(333,634)"
          d="m0 0 6 1 13 10 9 9 8 7 15 15 8 7 56 56 7 8 8 8 4 7-1 6-9 10-8 7-16 15-46 46h-2l-2 4-36 36-12 9-4-1-8-8-6-9-6-7v-8l6-7 8-7 12-11 8-8 7-8 45-45 6-5 3-6-1-7-72-72-7-8-12-12-4-6v-7l6-5 5-4 7-8z"
          fill="#3AC8CB"
        />
        <path
          transform="translate(485,881)"
          d="m0 0 179 1 1 1v30l-1 10-4 4-45 1h-46l-81-1-5-4-2-8v-28l3-5z"
          fill="#3AC9CB"
        />
        <path
          transform="translate(932,717)"
          d="m0 0h109l144 1 19 1 14 4 16 9 8 8 8 10 4 9 1 4v15l-2 11-4 11-8 13-10 10-13 6-12 3-7 1h-157l-77-1-4 1-1 2-1 162-2 21-4 11h-1l1-9 1-85 2-77 1-26 6-4 13-1 12-5 33-3h30l55 2h47l37 1h20l14-4 10-5 5-4 6-10 4-13 1-6v-19l-1-4-9-7-8-13-9-6-8-3-11-2h-23l-38 1h-11l-15 1h-77l-107-1-46-1-9 2h-3l8-6 7-3 6-1z"
          fill="#00E2BE"
        />
        <path
          transform="translate(1739,524)"
          d="m0 0 4 4 4 13h3l1 9 1 10 2-1 1 32h-2v3l2-1 1 40v28l-1 27-1 16 1 37 2 28v39l-1 22v21l-4 36-2 13-2 12-2 4-1 8-3 13-4 9-4 11-6 5h-2l-5 15h-2l-2 4-7 9-4 6-4 7-5 3-7 8-6 10-10 5-4 7-9 3-2-2-1-8 6-5 7-2 2-5 9-11 6-8 5-4 4-7 3-1 2-5 2-3h2l2-5 4-8 3-3 4-10h2l3-9 2-7h2l2-9 5-19 4-25 2-27v-116l-1-189-1-13z"
          fill="#130D0F"
        />
        <path
          transform="translate(1239,578)"
          d="m0 0 3 1-8 9-10 6-14 5-15 2-53 1-244-1-11-1-10-5-3-4 13 3 18-1 33-2 27-1 68-1h72l32 1h18l30 1h22l15-2 9-5z"
          fill="#00E2BE"
        />
        <path
          transform="translate(932,717)"
          d="m0 0h109l144 1 19 1 14 4 16 9 8 8 8 10 4 9 1 4v15l-2 11-4 11-4 5-1-4 4-11 2-10v-19l-1-4-9-7-8-13-9-6-8-3-11-2h-23l-38 1h-11l-15 1h-77l-107-1-46-1-9 2h-3l8-6 7-3 6-1z"
          fill="#00DDBA"
        />
        <path
          transform="translate(916,485)"
          d="m0 0h204l53 1 30 1 16 4 2 2-12-1h-46l-105 2-90-1h-89l4-3 9-3z"
          fill="#00E2BE"
        />
        <path
          transform="translate(571,865)"
          d="m0 0 12 2 5-2 5 1 5 2h10l1 1h13l2 1 10 1-4 2-1 2 1 3 2 2-24 1-101-1h-23v-2l2-2-2-1 1-3h2v-3l16-3h6v2h7l1 1 17-1 33-1z"
          fill="#130A0D"
        />
        <path
          transform="translate(1734,518)"
          d="m0 0 2 3 3 11 2 19 1 189v116l-2 27-5 30-2 4 1-19 2-13 1-155v-48l-1-151-2-9z"
          fill="#05C4A7"
        />
        <path
          transform="translate(848,756)"
          d="m0 0 1 4-3 10 2 16v26l1 24v41l1 20 1 36-2 52-1 22 2 15 1 9-2-2-4-13-2-14-1-150v-82l4-10z"
          fill="#00E2BE"
        />
        <path
          transform="translate(1664,1017)"
          d="m0 0m-1 1m-1 1m-1 1m-1 1 3 2-10 7-15 9-29 13-24 7-16 4-11 2-12 1h-16l-21-2-19-4-26-8-16-7-16-9 4-1 12 6 1 3 10 2 13 4 12 2 25 2h52l15-2 19-4 20-5 5-3 6-2 14-5 17-10z"
          fill="#00E3BF"
        />
        <path
          transform="translate(913,713)"
          d="m0 0h262l20 1 13 2 17 9 1 2-6-2-8-3-8-2-19-1-144-1h-109l-36 1-9 2-4 1 3-3 9-4z"
          fill="#112C29"
        />
        <path
          transform="translate(932,717)"
          d="m0 0h109l144 1 19 1 14 4 14 8-2 1-12-6-12-3-321-1 2-2 9-2z"
          fill="#0E9280"
        />
        <path
          transform="translate(961,920)"
          d="m0 0h1l5 23 1 2v32l1 12-2 13 2 3v6l1 6-1 3-2 9-1-2h-2l1 7-4 10-6 7-8 6-10 8-5 1-1-7 2-3h2l2-4 3-4h3l1-5 6-11 4-8 2-6h2l1-8 3-3 1-3v-7l-2-3z"
          fill="#130B0E"
        />
        <path
          transform="translate(919,481)"
          d="m0 0h187l60 1 24 1 14 2 12 4-3 1-10-2-30-1-53-1h-204l-24 2-7 1 2-2 14-4z"
          fill="#112C29"
        />
        <path
          transform="translate(1230,588)"
          d="m0 0 2 1-8 5-14 5-15 2-53 1-244-1-11-1-10-5-3-4 4 2 7 3 14 1h232l76-1 12-3 10-4z"
          fill="#0D9280"
        />
        <path
          transform="translate(916,485)"
          d="m0 0h204l53 1 30 1 13 3v1l-9-1h-322l3-2 13-2z"
          fill="#0E9280"
        />
        <path
          transform="translate(1626,538)"
          d="m0 0h1l1 103 2 144v50l-2 36-3 15-3 8-1-3 3-18 1-34v-244z"
          fill="#112C29"
        />
        <path
          transform="translate(1680,474)"
          d="m0 0 6 2 10 1 12 4v2l7 1 4 3 2 1 8 7 3 3-5-1-12-8-4 1 3 3v2l-5-1v-2l-9-3-11-3h-12l-11 4-13 7-6 5h-2v2l-5 1-4-1-3 8-2-2-4 4 1-5 6-9 5-3 2-4 3-1v-3l10-7 8-5 9-1h9z"
          fill="#130C0E"
        />
        <path
          transform="translate(1259,530)"
          d="m0 0 2 4 1-2h3l1 10v17l-4 14-2 1-2 7-7 6-2 4-15 12-6 1-1-3 1-2-3-1 1-2 3 1 5-3 1-4v-4l6-7 5-10 3-3 3-11 3-1 1-5 3-1v-4h-2v-12z"
          fill="#130C0E"
        />
        <path
          transform="translate(1386,801)"
          d="m0 0h10l16 4 10 6 12 11 7 10 5 15 4 15 3 24 4 16 6 11 9 10v2l4 2 13 9-4 1-10-6-5-4-7-8-6-7-8-15-2-7v-4h-2l-2-12-3-21-4-16-5-12-7-7-11-9-15-4h-19l-6 2-4-1 12-4z"
          fill="#01DAB8"
        />
        <path
          transform="translate(1236,815)"
          d="m0 0 2 1-7 7-13 6-12 3-7 1h-157l-77-1-4 1-2 2 1-4 4-1 177-1 54-1 18-1 12-4z"
          fill="#0E9280"
        />
        <path
          transform="translate(1258,758)"
          d="m0 0 5 2 1 1 1 13-3 21-8 18-6 8-5 6h-2l-2 4-5 3-5 1h-1l-1-6 4-4 7-8 4-4 2-6 6-11 3-10 2-11 1-12z"
          fill="#130B0E"
        />
        <path
          transform="translate(1621,580)"
          d="m0 0 4 2 1 13-1 115-2 3-2-4-2-25-1-46v-16l1-36z"
          fill="#130A0D"
        />
        <path
          transform="translate(844,764)"
          d="m0 0 1 3v32l1 56 1 157 1 10h2l1 9-2-2-4-13-2-14-1-150v-82z"
          fill="#0D9280"
        />
        <path
          transform="translate(1213,597)"
          d="m0 0 4 1-8 3-16 2-280 1-22-1-8-3-1-2 16 2 248 1 49-1 15-2z"
          fill="#112C29"
        />
        <path
          transform="translate(958,835)"
          d="m0 0h1v162l-2 21-4 11h-1l1-9 1-85 1-39 2-7z"
          fill="#06BBA0"
        />
        <path
          transform="translate(1654,1027)"
          d="m0 0 2 1-18 11-29 13-24 7-16 4-11 2-12 1h-16l-21-2-19-4-26-8-4-3 6 1 20 6 12 2 34 2 29-1 20-3 26-7 20-8 17-8z"
          fill="#0E9280"
        />
        <path
          transform="translate(841,770)"
          d="m0 0h1l1 82 1 150 3 21-3-4-3-15-1-112v-114z"
          fill="#112C29"
        />
        <path
          transform="translate(1626,538)"
          d="m0 0h1l1 103 2 144v50l-2 36-3 15-3 8-1-3 4-15 1-11 1-29v-46l-1-133z"
          fill="#0E9280"
        />
        <path
          transform="translate(1387,792)"
          d="m0 0h12l13 5-4 1h-4l2 1v2l-20 1-15 4-12 7-6 5h-3v-2l-2-1 3-7 3-1v-2l9-4 6-4 1-3z"
          fill="#130B0E"
        />
        <path
          transform="translate(884,479)"
          d="m0 0 4 1v6l-4 2-1 3-14 8-12 11-1-4 3-2 1-3-9 3 3-8 5-4 8-5v-2l12-5z"
          fill="#130B0E"
        />
        <path
          transform="translate(1355,815)"
          d="m0 0h2l-1 3-6 5-4 8-3 7-2 1-1 10-2 5-1 13 2 25 4 18 5 19 3 9v5l-2-2-9-27-5-24-2-24v-9l3-15 6-12 9-11z"
          fill="#08B49A"
        />
        <path
          transform="translate(486,925)"
          d="m0 0h161l13 1v1l-45 1h-46l-81-1z"
          fill="#0E9280"
        />
        <path
          transform="translate(962,470)"
          d="m0 0 33 2 3 2v2h-2l-1 2h-39l-10-1-12-3 2-2z"
          fill="#140A0D"
        />
        <path
          transform="translate(1615,1052)"
          d="m0 0h8l1 5-16 8-10 3-17 2-9 3h-5l1-6h15l5-4 7-1 1-3 11-1 2-1-3-2 5-2z"
          fill="#140A0D"
        />
        <path
          transform="translate(489,879)"
          d="m0 0h24l107 1 43 1v1h-159l-19-1z"
          fill="#112C29"
        />
        <path
          transform="translate(546,875)"
          d="m0 0h8l16 3 34 1v1h-97l-18-1v-1z"
          fill="#101010"
        />
        <path
          transform="translate(1609,1051)"
          d="m0 0 3 1-27 9-25 6-9 1h-26l-19-3-17-4-10-3 4-1 20 5 12 2 15 1h16l17-2 18-4 25-7z"
          fill="#112C29"
        />
        <path
          transform="translate(1225,495)"
          d="m0 0 6 2 8 7 10 14 4 8 1 4v20l-3 14-2-3 1-10v-22l-2-8h-2v-2h-2l-4-4-3-7-3-4v-2l-4-2-5-3z"
          fill="#04CBAC"
        />
        <path
          transform="translate(1439,831)"
          d="m0 0 2 1 5 15 4 15 3 24 4 16 6 11v3l-4-5-5-10-6-24-2-18-6-22z"
          fill="#0E9280"
        />
        <path
          transform="translate(1507,943)"
          d="m0 0 10 2 12 1h19l13-2h5l-4 1v2l-13 3h-24l-14-3-4-1z"
          fill="#0F574E"
        />
        <path
          transform="translate(1332,838)"
          d="m0 0 3 2-1 9-6 20h-2l-1-6 1-14 5-10z"
          fill="#130A0D"
        />
        <path
          transform="translate(1335,867)"
          d="m0 0h2l2 25 4 18 5 19 3 9v5l-2-2-6-17-2-12-4-17-2-21z"
          fill="#00E3BF"
        />
        <path
          transform="translate(933,1052)"
          d="m0 0 2 1-8 5-12 5-4 1h-15l-10-2-7-3 3-1 9 2h24l13-5z"
          fill="#0E9280"
        />
        <path
          transform="translate(1638,1042)"
          d="m0 0 5 2 2 4-5 4-11 1v-2h2v-5h2l1-3z"
          fill="#140A0D"
        />
        <path
          transform="translate(1386,801)"
          d="m0 0h10l16 4 1 3-7-1-8-2h-19l-6 2-4-1 12-4z"
          fill="#05C1A4"
        />
        <path
          transform="translate(929,1056)"
          d="m0 0 2 1-5 3-11 6-11 1-12-2-12-4-4-3 5 1 8 3 7 1h15l14-5z"
          fill="#112C29"
        />
        <path
          transform="translate(1251,530)"
          d="m0 0h3v20l-3 14-2-3 1-10z"
          fill="#05C6A8"
        />
        <path
          transform="translate(1145,471)"
          d="m0 0h7l-4 5-7-1-1 1h-19l-1-2z"
          fill="#140A0D"
        />
        <path
          transform="translate(960,994)"
          d="m0 0h2l2 3v7l-3 6h-2l-1 8h-1v-11h2z"
          fill="#101413"
        />
        <path
          transform="translate(1685,999)"
          d="m0 0 2 1-4 6-12 11-6 5-2-1 8-9 8-7z"
          fill="#05C1A4"
        />
        <path
          transform="translate(1620,877)"
          d="m0 0 2 1v5l-1 1v5l-8 2-2 2 1-5 1-3h2v-2h3z"
          fill="#130A0D"
        />
        <path
          transform="translate(1453,867)"
          d="m0 0 4 1 2 9-1 5-4 1-1-5z"
          fill="#140A0D"
        />
        <path
          transform="translate(1619,535)"
          d="m0 0 6 1v9l-4 2v2h-2z"
          fill="#140A0D"
        />
        <path
          transform="translate(1559,1071)"
          d="m0 0 5 2-4 2-12 1h-10l-2-2 2-1 19-1z"
          fill="#140A0D"
        />
        <path
          transform="translate(1677,1010)"
          d="m0 0 2 1-8 11-12 6v-3l9-7z"
          fill="#101918"
        />
        <path
          transform="translate(1664,1017)"
          d="m0 0m-1 1m-1 1m-1 1m-1 1 3 2-5 4-8 3-10 6-3-1 20-12z"
          fill="#02D6B5"
        />
        <path
          transform="translate(670,900)"
          d="m0 0 2 1 1 10-1 1h-5l-1-1 1-9z"
          fill="#130A0D"
        />
        <path
          transform="translate(1432,1035)"
          d="m0 0 6 1 10 5 1 3 9 3 2 2-5-1-16-8-7-4z"
          fill="#08B39A"
        />
        <path
          transform="translate(1343,919)"
          d="m0 0h2l6 19v5l-2-2-6-17z"
          fill="#05C2A5"
        />
        <path
          transform="translate(1383,797)"
          d="m0 0 8 1 4 1v2l-14 1 2-1-1-3z"
          fill="#101716"
        />
        <path
          transform="translate(543,869)"
          d="m0 0h19v2l-13 2-8-2z"
          fill="#101010"
        />
        <path
          transform="translate(866,734)"
          d="m0 0 2 1-14 14-2-1 7-8z"
          fill="#05CAAD"
        />
        <path
          transform="translate(1489,937)"
          d="m0 0 6 2 12 5v1l-9-1-4-2v-2l-5-2z"
          fill="#08B299"
        />
        <path
          transform="translate(1355,815)"
          d="m0 0h2l-1 3-6 5-3 6-5 3 2-4 7-9z"
          fill="#07B79C"
        />
        <path
          transform="translate(877,718)"
          d="m0 0 4 2-1 5-4 1-1-7z"
          fill="#130E10"
        />
        <path
          transform="translate(1542,941)"
          d="m0 0h6l3 3-6 1-8-1v-1h5z"
          fill="#140A0D"
        />
        <path
          transform="translate(1477,929)"
          d="m0 0 5 2 7 5-4 1-6-4z"
          fill="#07BA9F"
        />
        <path
          transform="translate(1669,1017)"
          d="m0 0 2 1-10 10-3-1 5-5z"
          fill="#10201E"
        />
        <path
          transform="translate(1719,952)"
          d="m0 0h2v2l2 1-3 5-4 2z"
          fill="#102220"
        />
        <path
          transform="translate(935,1049)"
          d="m0 0 3 1-8 5-4 2-3-1z"
          fill="#01D9B7"
        />
      </svg>
    </Link>
  );
};

export default LogoAtom;
