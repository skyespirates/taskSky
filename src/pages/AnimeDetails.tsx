import api from "@/api/instance";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AnimeDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [anime, setAnime] = useState({});
  useEffect(() => {
    api("/anime/" + id)
      .then((data) => {
        console.log(data.data.data);
        setAnime(data.data.data);
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  }, []);
  return (
    <div>
      {anime && (
        <div className="relative">
          <Button
            onClick={() => navigate("/anime")}
            className="absolute top-0 right-0"
          >
            Back
          </Button>
          <div>
            <img src={anime.images?.jpg.large_image_url} alt={anime.title} />
          </div>
          <div>
            <h4 className="text-3xl">{anime.title}</h4>
            <p>{anime.synopsis}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimeDetails;
