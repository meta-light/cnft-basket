const web3 = require('@solana/web3.js');
const { Helius } = require('helius-sdk');
const HeliusKey = new Helius("cfa7ca19-e84e-44f9-b4e0-8ea6eb251e1b");
const ownerAddress = "Gmc26GMnhE3AWwdAQpxxsQPo6UYaob4wPRxUpmDsujoX";

let assetInfoList = [];

async function getTPS() {
  const tps = await HeliusKey.rpc.getCurrentTPS();
  console.log("Solana TPS:", tps);
}

async function searchAssets() {
    const response = await HeliusKey.rpc.searchAssets({ ownerAddress: ownerAddress, compressed: true, page: 1 });
    const ids = response.items.map(item => item.id);
    for (const id of ids) {
      const info = await getAssetInfo(id);
      if (info.state) { assetInfoList.push(info); }
    }
    console.log(assetInfoList);
    //console.table(assetInfoList);
    //displayImages();
}

async function getAssetInfo(id) {
    const response = await HeliusKey.rpc.getAsset(id);
    const name = response.content.name;
    const state = response.compression.compressed;
    const image = response.content.links.image;
    const assetId = response.id;
    return { name, assetId, state, image };
}

async function displayImages() {
    const imageGrid = document.querySelector(".image-grid");
    for (const assetInfo of assetInfoList) {
        const imgElement = document.createElement("img");
        imgElement.src = assetInfo.image;
        imgElement.alt = assetInfo.name;
        imageGrid.appendChild(imgElement);
    }
}

export default function Home() {
  return (
    <main>
      <link rel="stylesheet" href="https://unpkg.com/terminal.css@0.7.2/dist/terminal.min.css"/>
      <title>Basket</title>
      <section class="terminal-output">
        <p>Welcome to the cNFT Basket</p>
        <div class="output-area"></div>
      </section>
      <section class="terminal-input-section">
        <button class="btn btn-default" onClick={() => getTPS()}>Get TPS</button>
        <button class="btn btn-default" onClick={() => searchAssets()}>Search Assets</button>
        <button class="btn btn-default" onClick={() => displayImages()}>Fetch Images</button>
      </section>
      <div class="article-grid">
      <a>
        <div class="equilibrium-image-container">
          <img class="view-icon" src="icon-view.svg" alt="View Icon"></img>
          <img class="equilibrium-image" src="image-equilibrium.jpg" alt="Equilibrium image"
            title="Equilibrium logo" height="604" width="604"></img>
        </div>
        <div class="profile-nick-div">
          <h2><span class="hover-cyan">Equilibrium &#x23;3429</span></h2>
        </div>
      </a>
      <a>
        <div class="equilibrium-image-container">
          <img class="view-icon" src="icon-view.svg" alt="View Icon"></img>
          <img class="equilibrium-image" src="image-equilibrium.jpg" alt="Equilibrium image"
            title="Equilibrium logo" height="604" width="604"></img>
        </div>
        <div class="profile-nick-div">
          <h2><span class="hover-cyan">Equilibrium &#x23;3429</span></h2>
        </div>
      </a>
      <a>
        <div class="equilibrium-image-container">
          <img class="view-icon" src="icon-view.svg" alt="View Icon"></img>
          <img class="equilibrium-image" src="image-equilibrium.jpg" alt="Equilibrium image"
            title="Equilibrium logo" height="604" width="604"></img>
        </div>
        <div class="profile-nick-div">
          <h2><span class="hover-cyan">Equilibrium &#x23;3429</span></h2>
        </div>
      </a>
      <a>
        <div class="equilibrium-image-container">
          <img class="view-icon" src="icon-view.svg" alt="View Icon"></img>
          <img class="equilibrium-image" src="image-equilibrium.jpg" alt="Equilibrium image"
            title="Equilibrium logo" height="604" width="604"></img>
        </div>
        <div class="profile-nick-div">
          <h2><span class="hover-cyan">Equilibrium &#x23;3429</span></h2>
        </div>
      </a>
      <a>
        <div class="equilibrium-image-container">
          <img class="view-icon" src="icon-view.svg" alt="View Icon"></img>
          <img class="equilibrium-image" src="image-equilibrium.jpg" alt="Equilibrium image"
            title="Equilibrium logo" height="604" width="604"></img>
        </div>
        <div class="profile-nick-div">
          <h2><span class="hover-cyan">Equilibrium &#x23;3429</span></h2>
        </div>
      </a>
      <a>
        <div class="equilibrium-image-container">
          <img class="view-icon" src="icon-view.svg" alt="View Icon"></img>
          <img class="equilibrium-image" src="image-equilibrium.jpg" alt="Equilibrium image"
            title="Equilibrium logo" height="604" width="604"></img>
        </div>
        <div class="profile-nick-div">
          <h2><span class="hover-cyan">Equilibrium &#x23;3429</span></h2>
        </div>
      </a>
      <a>
        <div class="equilibrium-image-container">
          <img class="view-icon" src="icon-view.svg" alt="View Icon"></img>
          <img class="equilibrium-image" src="image-equilibrium.jpg" alt="Equilibrium image"
            title="Equilibrium logo" height="604" width="604"></img>
        </div>
        <div class="profile-nick-div">
          <h2><span class="hover-cyan">Equilibrium &#x23;3429</span></h2>
        </div>
      </a>
      <a>
        <div class="equilibrium-image-container">
          <img class="view-icon" src="icon-view.svg" alt="View Icon"></img>
          <img class="equilibrium-image" src="image-equilibrium.jpg" alt="Equilibrium image"
            title="Equilibrium logo" height="604" width="604"></img>
        </div>
        <div class="profile-nick-div">
          <h2><span class="hover-cyan">Equilibrium &#x23;3429</span></h2>
        </div>
      </a>
      <a>
        <div class="equilibrium-image-container">
          <img class="view-icon" src="icon-view.svg" alt="View Icon"></img>
          <img class="equilibrium-image" src="image-equilibrium.jpg" alt="Equilibrium image"
            title="Equilibrium logo" height="604" width="604"></img>
        </div>
        <div class="profile-nick-div">
          <h2><span class="hover-cyan">Equilibrium &#x23;3429</span></h2>
        </div>
      </a>
      <a>
        <div class="equilibrium-image-container">
          <img class="view-icon" src="icon-view.svg" alt="View Icon"></img>
          <img class="equilibrium-image" src="image-equilibrium.jpg" alt="Equilibrium image"
            title="Equilibrium logo" height="604" width="604"></img>
        </div>
        <div class="profile-nick-div">
          <h2><span class="hover-cyan">Equilibrium &#x23;3429</span></h2>
        </div>
      </a>
      </div>
      <br></br>
      <div class="terminal-output">2023 Basket</div>
      <br></br>
    </main>
  )
}
