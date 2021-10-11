import type { NextPage } from "next";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import GoogleMapReact from "google-map-react";

import styles from "../../styles/pages/hospitals.module.scss";

interface PageProps {
  name: string;
  coordinates: {
    lat: number;
    lng: number;
  }
};

export const getStaticPaths = async () => {
  const hospitals = ["akh", "privatklinik-dobling", "privatklinik-goldenes-kreuz", "privatklinik-confraternitat", "wiener-privatklinik", "rudolfinerhaus-hospital"];
  const paths = hospitals.map(hospital => ({ params: { name: hospital } }));

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = async (context: any) => {
  const name = context.params.name;
  let coordinates = {};

  if (name === "akh")
    coordinates = { lat: 48.220699779550635, lng: 16.346773699218975 };
  else if (name === "privatklinik-dobling")
    coordinates = { lat: 48.23892217585118, lng: 16.358567052616422 };
  else if (name === "privatklinik-goldenes-kreuz")
    coordinates = { lat: 48.2178647694142, lng: 16.347141350748586 };
  else if (name === "privatklinik-confraternitat")
    coordinates = { lat: 48.21454071745081, lng: 16.348488782708273 };
  else if (name === "wiener-privatklinik")
    coordinates = { lat: 48.217176856340316, lng: 16.34793211524666 };
  else if (name === "rudolfinerhaus-hospital")
    coordinates = { lat: 48.24384917931828, lng: 16.347179367365793 };
  
  return {
    props: {
      name,
      coordinates
    }
  };
}

const Hospital: NextPage<PageProps> = ({ name, coordinates }) => {
  return (
    <div className={styles.page}>
      <div className={styles.top_section}>
        <div className={styles.links}>
          <Link href="/" passHref><a className={styles.link}>Acasa</a></Link>
          <span>/</span>
          <Link href="/hospitals" passHref><a className={styles.link}>Spitale</a></Link>
          <span>/</span>
        </div>

        <div className={styles.title}>{name.replace(/-/g, " ")}</div>
        <div className={styles.description}>Schimbăm modul în care mergi la medicul din Atlanta. One Medical, în colaborare cu Rețeaua de sănătate Emory, îl face mai rapid, mai ușor și mai plăcut să primești îngrijire atunci când ai nevoie de ea. Am conceput cu atenție întreaga noastră experiență în funcție de nevoile și confortul dvs. - de la întâlniri mai lungi (în persoană și peste videoclipuri) care încep la timp până la spații calde și calmante care vă fac să vă simțiți în largul dvs. Și când călătoriți, avem birouri în multe orașe importante din toată țara, care simt că sunteți ca acasă.</div>
      </div>

      <div className={styles.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAxVPqRjZsSe9-1RILdUDLziqcOaYtjwwE" }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={14}
          margin={[50, 50, 50, 50]}
          options={{ }}
          onChange={() => {}}
        >
          <div className={styles.marker} lat={coordinates.lat} lng={coordinates.lng}>
            <FaMapMarkerAlt />
          </div>
        </GoogleMapReact>
      </div>
    </div>
  );
}

export default Hospital;