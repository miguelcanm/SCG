<#--
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
"License"); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
"AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
-->

<html xmlns="http://www.w3.org/1999/xhtml">
  <head></head>
  <body>
    <p>The information filled by the person on contact us page is as follows:</p>
    <p>${uiLabelMap.CommonName}: ${parameters.firstName?if_exists} ${parameters.lastName?if_exists}</p>
    <p>${uiLabelMap.CommonEmail}: ${parameters.email?if_exists}</p>
    <p>${uiLabelMap.CommonMessage}: ${parameters.message?if_exists}</p>
  </body>
</html>