# Debouncing

typing slow= 200ms
typing fast = 20ms

Performance :
-iphone pro max = 14 letter _ 1000 users = 140000
-with debouncing = 3 api calls _ 1000 = 3000 , so the performance is greatly improved

Debouncing with 200ms
-if difference b/w 2 key strokes is <200 ms- declince API call
-if >200 make an API call

# Cache

    time complexity to search in array = O(n)
    eg ["i","ip","iph"]

    time complexity to search in map/object = O(1)
    eg {
        i:
        ip:
        iph:
    }

# Live chat feature

    -Web sockets - whatapp chat
        WebSockets provide a full-duplex communication channel over a single, long-lived connection between the client (browser) and the server. This allows real-time data transfer without the overhead of HTTP requests.

    -API Polling eg-youtube chat, cricbuzz
        API polling involves making repeated HTTP requests to a server at predefined intervals to fetch updated data. This approach is simpler to implement but can lead to higher server load and latency compared to WebSockets for real-time updates.
#   m y - y o u t u b e  
 