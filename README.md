<h1 class="code-line" data-line-start=0 data-line-end=1 ><a id="Assignment_0"></a>Assignment</h1>
<h2 class="code-line" data-line-start=1 data-line-end=2 ><a id="_Build_a_Book_Catallog_Backend_Assignment__1"></a><em>Build a Book Catallog Backend Assignment</em></h2>
<p class="has-line-data" data-line-start="3" data-line-end="4">The main focus of this assignment is to implement CRUD operations, pagination and filtering using Prisma, Postgres and Express.</p>
<h1 class="code-line" data-line-start=4 data-line-end=5 ><a id="Technology_Stack_4"></a>Technology Stack:</h1>
<ul>
<li class="has-line-data" data-line-start="5" data-line-end="6">Use TypeScript as the Programming Language.</li>
<li class="has-line-data" data-line-start="6" data-line-end="7">Use Express.js as the web framework.</li>
<li class="has-line-data" data-line-start="7" data-line-end="8">Use Prisma as the Object Realtion Model (ORM)</li>
<li class="has-line-data" data-line-start="8" data-line-end="10">Use postgreSQL as the database</li>
</ul>
<h3 class="code-line" data-line-start=10 data-line-end=11 ><a id="Live_Link_httpsexamplecom_10"></a>Live Link: <a href="https://build-books-cattalog-j2se8ws0c-tareqhasan382.vercel.app/api/v1/orders">https://build-books-cattalog-j2se8ws0c-tareqhasan382.vercel.app/api/v1/orders</a></h3>
<h1 class="code-line" data-line-start=11 data-line-end=12 ><a id="11_Application_Routes_11"></a>11. Application Routes:</h1>
<h2 class="code-line" data-line-start=12 data-line-end=13 ><a id="User_12"></a>User</h2>
<pre><code>{
  &quot;email&quot;: &quot;admin@example.com&quot;,
  &quot;password&quot;: &quot;admin123&quot;
}
</code></pre>
<ul>
<li class="has-line-data" data-line-start="18" data-line-end="19">
<h5 class="code-line" data-line-start=18 data-line-end=19 ><a id="apiv1authsignup_POST_18"></a>api/v1/auth/signup (POST)</h5>
</li>
<li class="has-line-data" data-line-start="19" data-line-end="20">
<h5 class="code-line" data-line-start=19 data-line-end=20 ><a id="apiv1authlogin_POST_19"></a>api/v1/auth/login (POST)</h5>
</li>
<li class="has-line-data" data-line-start="20" data-line-end="21">
<h5 class="code-line" data-line-start=20 data-line-end=21 ><a id="apiv1users_GET_20"></a>api/v1//api/v1/profile (GET)</h5>
</li>
<li class="has-line-data" data-line-start="20" data-line-end="21">
<h5 class="code-line" data-line-start=20 data-line-end=21 ><a id="apiv1users_GET_20"></a>api/v1/users (GET)</h5>
</li>
<li class="has-line-data" data-line-start="21" data-line-end="22">
<h5 class="code-line" data-line-start=21 data-line-end=22 ><a id="apiv1users1d460825c52149738266ab8265e88d84_Single_GET_21"></a>api/v1/users/1d460825-c521-4973-8266-ab8265e88d84 (Single GET)</h5>
</li>
<li class="has-line-data" data-line-start="22" data-line-end="23">
<h5 class="code-line" data-line-start=22 data-line-end=23 ><a id="apiv1users1d460825c52149738266ab8265e88d84_PATCH_22"></a>api/v1/users/1d460825-c521-4973-8266-ab8265e88d84 (PATCH)</h5>
</li>
<li class="has-line-data" data-line-start="23" data-line-end="24">
<h5 class="code-line" data-line-start=23 data-line-end=24 ><a id="apiv1users1d460825c52149738266ab8265e88d84_DELETE_23"></a>api/v1/users/1d460825-c521-4973-8266-ab8265e88d84 (DELETE)</h5>
</li>
</ul>
<h2 class="code-line" data-line-start=24 data-line-end=25 ><a id="Category_24"></a>Category</h2>
<ul>
<li class="has-line-data" data-line-start="25" data-line-end="26">
<h5 class="code-line" data-line-start=25 data-line-end=26 ><a id="apiv1categoriescreatecategory_POST_25"></a>api/v1/categories/create-category (POST)</h5>
</li>
<li class="has-line-data" data-line-start="26" data-line-end="27">
<h5 class="code-line" data-line-start=26 data-line-end=27 ><a id="apiv1categories_GET_26"></a>api/v1/categories (GET)</h5>
</li>
<li class="has-line-data" data-line-start="27" data-line-end="28">
<h5 class="code-line" data-line-start=27 data-line-end=28 ><a id="apiv1categories8a3c38ab0d7f460fab4d5af1dbcf5044_Single_GET_27"></a>api/v1/categories/8a3c38ab-0d7f-460f-ab4d-5af1dbcf5044 (Single GET)</h5>
</li>
<li class="has-line-data" data-line-start="28" data-line-end="29">
<h5 class="code-line" data-line-start=28 data-line-end=29 ><a id="apiv1categories8a3c38ab0d7f460fab4d5af1dbcf5044_PATCH_28"></a>api/v1/categories/8a3c38ab-0d7f-460f-ab4d-5af1dbcf5044 (PATCH)</h5>
</li>
<li class="has-line-data" data-line-start="29" data-line-end="30">
<h5 class="code-line" data-line-start=29 data-line-end=30 ><a id="apiv1categories8a3c38ab0d7f460fab4d5af1dbcf5044_DELETE_29"></a>api/v1/categories/8a3c38ab-0d7f-460f-ab4d-5af1dbcf5044 (DELETE)</h5>
</li>
</ul>
<h2 class="code-line" data-line-start=30 data-line-end=31 ><a id="Books_30"></a>Books</h2>
<ul>
<li class="has-line-data" data-line-start="31" data-line-end="32">
<h5 class="code-line" data-line-start=31 data-line-end=32 ><a id="apiv1bookscreatebook_POST_31"></a>api/v1/books/create-book (POST)</h5>
</li>
<li class="has-line-data" data-line-start="32" data-line-end="33">
<h5 class="code-line" data-line-start=32 data-line-end=33 ><a id="apiv1books_GET_32"></a>api/v1/books (GET)</h5>
</li>
<li class="has-line-data" data-line-start="33" data-line-end="34">
<h5 class="code-line" data-line-start=33 data-line-end=34 ><a id="apiv1booksbooks8a3c38ab0d7f460fab4d5af1dbcf5044category_GET_33"></a>api/v1/books/books/8a3c38ab-0d7f-460f-ab4d-5af1dbcf5044/category (GET)</h5>
</li>
<li class="has-line-data" data-line-start="34" data-line-end="35">
<h5 class="code-line" data-line-start=34 data-line-end=35 ><a id="apiv1books26a00e1f8d714064bc341b36218423d5_GET_34"></a>api/v1/books/26a00e1f-8d71-4064-bc34-1b36218423d5 (GET)</h5>
</li>
<li class="has-line-data" data-line-start="35" data-line-end="36">
<h5 class="code-line" data-line-start=35 data-line-end=36 ><a id="apiv1books26a00e1f8d714064bc341b36218423d5_PATCH_35"></a>api/v1/books/26a00e1f-8d71-4064-bc34-1b36218423d5 (PATCH)</h5>
</li>
<li class="has-line-data" data-line-start="36" data-line-end="37">
<h5 class="code-line" data-line-start=36 data-line-end=37 ><a id="apiv1books26a00e1f8d714064bc341b36218423d5_DELETE_36"></a>api/v1/books/26a00e1f-8d71-4064-bc34-1b36218423d5 (DELETE)</h5>
</li>
</ul>
<h2 class="code-line" data-line-start=37 data-line-end=38 ><a id="Orders_37"></a>Orders</h2>
<ul>
<li class="has-line-data" data-line-start="38" data-line-end="39">
<h5 class="code-line" data-line-start=38 data-line-end=39 ><a id="apiv1orderscreateorder_POST_38"></a>api/v1/orders/create-order (POST)</h5>
</li>
<li class="has-line-data" data-line-start="39" data-line-end="40">
<h5 class="code-line" data-line-start=39 data-line-end=40 ><a id="apiv1orders_GET_39"></a>api/v1/orders (GET)</h5>
</li>
<li class="has-line-data" data-line-start="40" data-line-end="41">
<h5 class="code-line" data-line-start=40 data-line-end=41 ><a id="apiv1orders885e21789f824edb82dcdf17fd5e0780_GET_40"></a>api/v1/orders/885e2178-9f82-4edb-82dc-df17fd5e0780 (GET)</h5>
</li>
</ul>
<pre><code>                                  © Tareq </code></pre>
