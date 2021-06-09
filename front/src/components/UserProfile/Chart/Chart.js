import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Button } from "@material-ui/core/";
import { useDispatch, useSelector } from "react-redux";
import { getPostsByUser } from "../../../actions/posts";

const Chart = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const { postsByUser } = useSelector((state) => state.posts);
  const [postDays, setPostDays] = useState([]);
  let filtered = [0, 0, 0, 0, 0, 0, 0];

  const filterData = () => {
    for (const post of postsByUser) {
      let date = new Date(post.createdAt);
      let day = date.getDay();
      if (day === 0) {
        //Sunday
        filtered[0]++;
      } else if (day === 1) {
        //Monday
        filtered[1]++;
      } else if (day === 2) {
        //Tuesday
        filtered[2]++;
      } else if (day === 3) {
        //Wednesday
        filtered[3]++;
      } else if (day === 4) {
        //Thursday
        filtered[4]++;
      } else if (day === 5) {
        //Friday
        filtered[5]++;
      } else {
        //Saturday
        filtered[6]++;
      }
    }
    setPostDays(filtered);
  };

  useEffect(() => {
    dispatch(getPostsByUser(user.result._id));
    filterData();
  }, [dispatch, user.result._id]);

  const data = {
    labels: [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ],
    datasets: [
      {
        label: "Dias que más publicas posts",
        fill: true,
        lineTension: 0.3,
        backgroundColor: "rgba(63,81,181,0.4)",
        borderColor: "rgba(63,81,181,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(245,0,87,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(245,0,87,0.4)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: postDays,
      },
    ],
  };

  return (
    <div>
      <h2>Line Example</h2>
      <Line data={data} />
      <Button>Click</Button>
    </div>
  );
};

export default Chart;
