# Javascript API

The Javascript API of the infura endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST` requests to the [infura API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.infura.post(body)
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API: 'eth_accounts'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethAccounts.post(id)
```
---
* API: 'eth_blockNumber'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethBlockNumber.post(id, params)
```
---
* API: 'eth_call'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethCall.post(id, params)
```
---
* API: 'eth_chainId'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethChainId.post(id, params)
```
---
* API: 'eth_createAccessList'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethCreateAccessList.post(id, params)
```
---
* API: 'eth_estimateGas'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethEstimateGas.post(id, params)
```
---
* API: 'eth_feeHistory'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethFeeHistory.post(id, params)
```
---
* API: 'eth_getBalance'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetBalance.post(id, params)
```
---
* API: 'eth_gasPrice'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGasPrice.post(id, params)
```
---
* API: 'eth_getBlockByHash'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetBlockByHash.post(id, params)
```
---
* API: 'eth_getBlockByNumber'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetBlockByNumber.post(id, params)
```
---
* API: 'eth_getBlockTransactionCountByHash'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetBlockTransactionCountByHash.post(id, params)
```
---
* API: 'eth_getBlockTransactionCountByNumber'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetBlockTransactionCountByNumber.post(id, params)
```
---
* API: 'eth_getCode'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetCode.post(id, params)
```
---
* API: 'eth_getLogs'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetLogs.post(id, params)
```
---
* API: 'eth_getStorageAt'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetStorageAt.post(id, params)
```
---
* API: 'eth_getTransactionByBlockHashAndIndex'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetTransactionByBlockHashAndIndex.post(id, params)
```
---
* API: 'eth_getTransactionByBlockNumberAndIndex'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetTransactionByBlockNumberAndIndex.post(id, params)
```
---
* API: 'eth_getTransactionByHash'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetTransactionByHash.post(id, params)
```
---
* API: 'eth_getTransactionCount'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetTransactionCount.post(id, params)
```
---
* API: 'eth_getTransactionReceipt'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetTransactionReceipt.post(id, params)
```
---
* API: 'eth_getUncleByBlockHashAndIndex'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetUncleByBlockHashAndIndex.post(id, params)
```
---
* API: 'eth_getUncleByBlockNumberAndIndex'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetUncleByBlockNumberAndIndex.post(id, params)
```
---
* API: 'eth_getUncleCountByBlockHash'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetUncleCountByBlockHash.post(id, params)
```
---
* API: 'eth_getUncleCountByBlockNumber'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetUncleCountByBlockNumber.post(id, params)
```
---
* API: 'eth_getWork'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetWork.post(id, params)
```
---
* API: 'eth_mining'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethMining.post(id, params)
```
---
* API: 'eth_hashrate'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethHashrate.post(id, params)
```
---
* API: 'eth_protocolVersion'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethProtocolVersion.post(id, params)
```
---
* API: 'eth_syncing'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethSyncing.post(id, params)
```
---
* API: 'eth_getFilterChanges'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetFilterChanges.post(id, params)
```
---
* API: 'eth_getFilterLogs'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethGetFilterLogs.post(id, params)
```
---
* API: 'eth_newFilter'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethNewFilter.post(id, params)
```
---
* API: 'eth_newBlockFilter'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethNewBlockFilter.post(id, params)
```
---
* API: 'eth_uninstallFilter'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.ethUninstallFilter.post(id, params)
```
---
* API: 'net_listening'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.netListening.post(id, params)
```
---
* API: 'net_listening'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.netListening.post(id, params)
```
---
---
* API: 'net_peerCount'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.netPeerCount.post(id, params)
```
---
* API: 'net_version'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.netVersion.post(id, params)
```
---
* API: 'web3_clientVersion'
* HTTP Method: 'POST'
```javascript
app.endpoints.infura.web3ClientVersion.post(id, params)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/eth_accounts/{id}<br>/eth_blockNumber/{id}/{params}<br>/eth_call/{id}/{params}<br>/eth_chainId/{id}/{params}<br>/eth_createAccessList/{id}/{params}<br>/eth_estimateGas/{id}/{params}<br>/eth_feeHistory/{id}/{params}<br>/eth_getBalance/{id}/{params}<br>/eth_gasPrice/{id}/{params}<br>/eth_getBlockByHash/{id}/{params}<br>/eth_getBlockByNumber/{id}/{params}<br>/eth_getBlockTransactionCountByHash/{id}/{params}<br>/eth_getBlockTransactionCountByNumber/{id}/{params}<br>/eth_getCode/{id}/{params}<br>/eth_getLogs/{id}/{params}<br>/eth_getStorageAt/{id}/{params}<br>/eth_getTransactionByBlockHashAndIndex/{id}/{params}<br>/eth_getTransactionByBlockNumberAndIndex/{id}/{params}<br>/eth_getTransactionByHash/{id}/{params}<br>/eth_getTransactionCount/{id}/{params}<br>/eth_getTransactionReceipt/{id}/{params}<br>/eth_getUncleByBlockHashAndIndex/{id}/{params}<br>/eth_getUncleByBlockNumberAndIndex/{id}/{params}<br>/eth_getUncleCountByBlockHash/{id}/{params}<br>/eth_getUncleCountByBlockNumber/{id}/{params}<br>/eth_getWork/{id}/{params}<br>/eth_mining/{id}/{params}<br>/eth_hashrate/{id}/{params}<br>/eth_protocolVersion/{id}/{params}<br>/eth_sendRawTransaction/{project-id}/{id}/{params}<br>/eth_submitWork/{project-id}/{id}/{params}<br>/eth_syncing/{id}/{params}<br>/eth_getFilterChanges/{id}/{params}<br>/eth_getFilterLogs/{id}/{params}<br>/eth_newFilter/{id}/{params}<br>/eth_newBlockFilter/{id}/{params}<br>/eth_uninstallFilter/{id}/{params}<br>/net_listening/{id}/{params}<br>/net_listening/net_peerCount/{id}/{params}<br>/net_version/{id}/{params}<br>/web3_clientVersion/{id}/{params}<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*