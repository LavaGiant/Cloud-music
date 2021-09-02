import styled from 'styled-components';

export const AlbumWrapper = styled.div`
  .album-image {
    position: relative;
    width: ${({ width }) => `${width}px`};
    height: ${({ size }) => `${size}px`};
    overflow: hidden;
    margin-top: 15px;
    img {
      width: ${({ size }) => `${size}px`};
      height: ${({ size }) => `${size}px`};
    }
    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${({ bgp }) => `${bgp}px`};
      text-indent: -9999px;
    }
  }
  .album-info {
    font-size: 12px;
    width: ${({ size }) => `${size}px`};
    .name {
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist {
      color: #666;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
  }
`