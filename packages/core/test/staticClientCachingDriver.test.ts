/*
 * Copyright (c) 2019, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
"use strict";
import chai from "chai";
import chaiAsPromised from "chai-as-promised";

import cacheTests from "./cache/basic.tests";
import etagTests from "./cache/etag.tests";
import evictionTests from "./cache/eviction.tests";
import multipleHeadersTests from "./cache/multipleHeaders.tests";
import noCacheHeaderTests from "./cache/noCacheHeader.tests";

import { BaseClient } from "../src/base/client";
import { CacheManagerKeyv } from "../src/base/cacheManagerKeyv";

describe("Default cache tests", function() {
  before(function() {
    chai.should();
    chai.use(chaiAsPromised);
    this.client = new BaseClient({
      baseUri: "https://somewhere"
    });
  });
  cacheTests();
  etagTests();
  evictionTests();
  multipleHeadersTests();
  noCacheHeaderTests();
});

describe("Redis cache tests", function() {
  before(function() {
    chai.should();
    chai.use(chaiAsPromised);
    this.client = new BaseClient({
      baseUri: "https://somewhere",
      cacheManager: new CacheManagerKeyv("redis://localhost")
    });
  });
  after(function() {
    this.client.clientConfig.cacheManager.quit();
  });
  beforeEach(function() {
    this.client.clientConfig.cacheManager?.keyv?.clear();
  });
  cacheTests();
  etagTests();
  evictionTests();
  multipleHeadersTests();
  noCacheHeaderTests();
});
