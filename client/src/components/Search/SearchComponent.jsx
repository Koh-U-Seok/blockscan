import { useState } from "react";
import styled from "styled-components";

import searchBtn from "./images/search_btn.png";

const SearchComponent = ({
  searchType,
  searchData,
  setSearchType,
  setSearchData,
  navigateToSearch,
  navigate,
}) => {
  const [searchDropdown, setSearchDropdown] = useState("false");
  const toggleSearchDropdown = () => {
    setSearchDropdown((state) => !state);
  };
  const searchTypeList = ["블록 번호", "해시", "지갑", "트랜잭션"];

  return (
    <SearchDiv searchTypeListLength={searchTypeList.length}>
      <div className="search_innerBox">
        <div className="search_innerBox_selectType">
          <div
            className="search_innerBox_selectType_title"
            onClick={() => {
              toggleSearchDropdown();
            }}
          >
            <span></span> {searchType}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              width="20px"
              height="20px"
            >
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
            </svg>
          </div>
          <div
            className={`search_innerBox_selectType_items ${
              searchDropdown ? "off" : "on"
            }`}
          >
            {searchTypeList.map((item, index) => {
              return (
                <div
                  className="search_innerBox_selectType_item"
                  key={`search_innerBox_selectType_item_${index}`}
                  onClick={() => {
                    toggleSearchDropdown();

                    setSearchType(item);
                  }}
                >
                  <span>{item}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="search_innerBox_inputBox_cover">
          <div className="search_innerBox_inputBox">
            <input
              type="text"
              className="search_innerBox_inputBox_input"
              onInput={(e) => {
                setSearchData(e.target.value);
              }}
              onKeyUp={() => {
                if (window.event.keyCode == 13) {
                  if (searchData.match(/\S/g)) {
                    navigateToSearch(searchType, searchData, navigate);
                    return;
                  } else {
                    alert("검색어를 입력하세요");
                  }
                }
              }}
            />
            <div
              className="search_innerBox_inputBox_img"
              onClick={() => {
                if (searchData.match(/\S/g)) {
                  navigateToSearch(searchType, searchData, navigate);
                  return;
                } else {
                  alert("검색어를 입력하세요");
                }
              }}
            >
              <img src={searchBtn} alt="검색한다" />
            </div>
          </div>
        </div>
        <div className="search_innerBox_flex"></div>
      </div>
    </SearchDiv>
  );
};

export default SearchComponent;

const SearchDiv = styled.div`
  background-color: rgb(94, 132, 158);
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: center;

  .search_innerBox {
    width: 1024px;
    min-width:1024px;
    max-width:1024px;
    position: relative;
    display: flex;

    

    .search_innerBox_selectType {
      max-width: 200px;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      margin-right: 20px;
      
      .search_innerBox_selectType_title {
        background-color: white;
        border: 1px solid #e3e3e3;
        text-align: center;
        font-size: 13px;
        padding-top: 10px;
        padding-bottom: 10px;
        display:flex;
        justify-content:space-between;

        svg{
          padding-right:10px;
        }
      }

      .search_innerBox_selectType_items {
        z-index:1;
        padding-left: 10px;
        padding-right: 10px;
        position: absolute;
        display: none;
        background-color: white;
        width: 180px;
        bottom: -${(props) => props.searchTypeListLength * 16 + 21}px;
        border: 1px solid gainsboro;

        & > div {
          padding-top: 5px;
          padding-bottom: 5px;
          display: flex;
          justify-content: center;
          inSearch_innerBox_selectType_item:nth-child(3) {
            border-top: 1px solid #474a51;
        }
  
        & span {
          padding-left: 5px;
          padding-right: 5px;
          font-size: 12px;
        }
      }
    }
    .search_innerBox_selectType_items.on {
      display: block;
      overflow: auto;
    }
  }
  .search_innerBox_inputBox_cover{

    display:flex;
    flex-direction: column;
    justify-content: center;

        .search_innerBox_inputBox {
      display: flex;
      background-color: rgb(71, 110, 139);
      
      font-size: 13px;
      padding-top: 10px;
      padding-bottom: 10px;
      width: 800px;

      .search_innerBox_inputBox_input{
        width: 90%;
        font-size:18px;
        margin-left:10px;
        background-color:transparent;
        border:none;
        color:white;
        outline:none;
      }

      .search_innerBox_inputBox_img{
        cursor:pointer;
        padding-left:10px;
        padding-right:10px;
      }
    }
  }
 
`;
