import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [seachResults, setSearchResults] = useState([]);
  const [searchFocus, setSearchFocus] = useState(false);

  const dispatch = useDispatch();

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //Debouncing , make an api call after 200ms only(only if the difference between the key press is more than 200ms)
    //otherwise decline the API call

    /**
     * if the search query is present in the cache then directly setSearchResults from the cache, dont make an API call
     *
     *  searchCache = {
     *  iphone : ["iphone pro", "iphone 14"]
     * }
     *
     */

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSearchResults(searchCache[searchQuery]);
      } else {
        youtubeSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key -i ( i- key is pressed in searching iphone)
   * -render the component
   * -useEffect()
   * -start timer =>make api calls after 200 ms
   *
   *
   * key- ip  (these two keys are pressed in searching iphone)
   * -destroy the previous component (also useEffect return method is called)
   * -useEffect()
   * -start timer=> make api calls after 200ms
   *
   * setTimeout(200) -make an API call
   */

  const youtubeSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    setSearchResults(json[1]);
    //update the cache after setSearchResults, so that cache has the value stored
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <>
      <div className="flex h-14 justify-between m-1 p-1 shadow-lg rounded-lg bg-gray-50">
        <div className="flex rounded-xl">
          <img
            onClick={() => handleClick()}
            className="m-1  p-1 cursor-pointer rounded-md"
            alt="hamburger-icon"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/292/406/small/hamburger-menu-line-icon-free-vector.jpg"
          />
          <a href="/">
            <img
              className="m-1 p-1 h-10"
              alt="youtube-icon"
              src="https://st2.depositphotos.com/1102480/6675/i/450/depositphotos_66757783-stock-photo-youtube-logotype-printed-on-paper.jpg"
            />
          </a>
        </div>

        <div className="grid grid-flow-col rounded-xl w-[40rem]">
          <div className="">
            <div className="flex mx-2">
              <input
                type="text"
                placeholder="Search"
                className="rounded-full p-1 m-1 border border-purple-800 w-10/12"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
              />
              <button className="rounded-lg bg-gray-400 p-1 m-1 border border-purple-800 w-2/12">
                Search
              </button>
            </div>
            <div className="absolute bg-white m-1 p-1 rounded-lg shadow-md w-[33rem]">
              <ul>
                {searchFocus &&
                  seachResults.map((result) => (
                    <li className="border-gray-100 shadow-md rounded-lg m-1 my-2 p-1 hover:bg-slate-100">
                      {result}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex rounded-lg m-1 p-2">
          <img
            className="mx-2"
            src="https://www.svgrepo.com/show/31480/notification-bell.svg"
            alt="notification-icon"
          />
          <img
            className="mx-2 rounded-md"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf2j71u2ipMbi4uUIcRaomOvJOSPkvvUPWFA&s"
            alt="user-logo"
          />
        </div>
      </div>
    </>
  );
};

export default Head;
