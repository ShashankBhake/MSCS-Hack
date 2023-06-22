import React from "react";
import DatamapsIndia from "react-datamaps-india";
import './map.css'
const MapChart = () => {
  return (
    <div style={{ position: "relative" }}>
      <h1 className="map-title" style={{display : "flex", justifyContent : "center" , marginTop : "16px",  transform: "translate(-3%)", fontSize : "40px"}} >No. of Societies</h1>
      <DatamapsIndia
        style={{ postion: "relative", left: "25%" }}
        regionData={{
          "Andaman & Nicobar Island": {
            value: 0,
            s : 0
          },
          "Andhra Pradesh": {
            value: 2,
            s :1
          },
          "Arunachal Pradesh": {
            value: 0,
            s : 0
          },
          Assam: {
            value: 1,
            s : 1
          },
          Bihar: {
            value: 3,
            s : 2
          },
          Chandigarh: {
            value: 0,
            s:0
          },
          Chhattisgarh: {
            value: 0,
            s:0
          },
          Delhi: {
            value: 5,
            s:4
          },
          Goa: {
            value: 0,
            s:0
          },
          Gujarat: {
            value: 4,
            s:2
          },
          Haryana: {
            value: 4,
            s:4
          },
          "Himachal Pradesh": {
            value: 0,
            s:0
          },
          "Jammu & Kashmir": {
            value: 1,
            s:1
          },
          Jharkhand: {
            value: 0,
            s:0
          },
          Karnataka: {
            value: 1,
            s:1
          },
          Kerala: {
            value: 9,
            s:4
          },
          Lakshadweep: {
            value: 0,
            s:0
          },
          "Madhya Pradesh": {
            value: 3,
            s:2
          },
          Maharashtra: {
            value: 28,
            s:7
          },
          Manipur: {
            value: 3,
            s:2
          },
          Meghalaya: {
            value: 0,
            s:0
          },
          Mizoram: {
            value: 0,
            s:0
          },
          Nagaland: {
            value: 0,s:0
          },
          Odisha: {
            value: 0,s:0
          },
          Puducherry: {
            value: 0,s:0
          },
          Punjab: {
            value: 1,s:1
          },
          Rajasthan: {
            value: 0,s:0
          },
          Sikkim: {
            value: 0,s:0
          },
          "Tamil Nadu": {
            value: 8,s:4
          },
          Telangana: {
            value: 6,s:4
          },
          Tripura: {
            value: 0,s:0
          },
          "Uttar Pradesh": {
            value: 19,s:6
          },
          Uttarakhand: {
            value: 1,s:0
          },
          "West Bengal": {
            value: 1,s:1
          }
        }}
        hoverComponent={({ value }) => {
          return (
            <div>
              <div>
                {value.name}
                <br/>
                No. of Socities: {value.value}
                <br/>
                No. of Sectors: {value.s}
              </div>
            </div>
          );
        }}
        mapLayout={{
          startColor: "#b3d1ff",
          endColor: "#005ce6",
          hoverTitle: "Count",
          noDataColor: "#f5f5f5",
          borderColor: "#8D8D8D",
          hoverColor: "blue",
          hoverBorderColor: "green",
          height: 10,
          weight: 30
        }}
      />
    </div>
  );
};

export default MapChart;
