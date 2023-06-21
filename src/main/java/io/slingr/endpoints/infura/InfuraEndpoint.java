package io.slingr.endpoints.infura;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.exceptions.ErrorCode;
import io.slingr.endpoints.framework.annotations.*;
import io.slingr.endpoints.services.AppLogs;
import io.slingr.endpoints.services.rest.RestMethod;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.nio.charset.StandardCharsets;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

/**
 * infura endpoint
 * Created by dgaviola on 10/25/17.
 */
@SlingrEndpoint(name = "infura", functionPrefix = "_")
public class InfuraEndpoint extends HttpEndpoint {
    private static final Logger logger = LoggerFactory.getLogger(InfuraEndpoint.class);

    @EndpointProperty
    private String apiKey;

    @EndpointProperty
    private String network;


    @Override
    public String getApiUri() {
        return String.format("https://%s.infura.io/v3/%s", network, apiKey);
    }


    @Override
    public void endpointStarted() {
        logger.info("Initializing infura-endpoint");
        httpService().setAllowExternalUrl(true);
    }


}